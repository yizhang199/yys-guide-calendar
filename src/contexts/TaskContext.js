import React, { createContext, useContext, useEffect, useState } from 'react';
import { OneTimeTasks, WeeklyTasks, DailyTasks, Outlines } from 'data/tasks';
import store from 'store2';

export const TaskContext = createContext();

// dailyTaskById - {[taskId:number]: {completedAt: xxxx}}
const getInitialDailyTasks = () => {
  const dailyTaskById = store.get('daily-tasks');

  const result = DailyTasks.map((task) => {
    const taskRecord = dailyTaskById && dailyTaskById[task.id];

    if (!taskRecord || !taskRecord.completedAt)
      return { ...task, isDone: false };

    const now = new Date();
    const today = new Date(now.toDateString());
    const completedDay = new Date(taskRecord.completedAt);

    return {
      ...task,
      isDone: today - completedDay <= 0,
    };
  });

  return result;
};

function getMondayOfCurrentWeek() {
  const today = new Date();
  const day = today.getDay(); // Sunday is 0, Monday is 1, and so on...

  // Calculate the difference in days from the current day to Monday (assuming Monday is the start of the week)
  const diffToMonday = (day + 6) % 7;

  // Subtract the difference to get the date of Monday
  const monday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - diffToMonday
  );

  return monday;
}

// weeklyTaskById - {[taskId: number]: {startAt: xxxx, completedAt: xxxx}}
const getInitialWeeklyTasks = () => {
  const weeklyTaskById = store.get('weekly-tasks');
  const result = WeeklyTasks.map((task) => {
    const taskRecord = weeklyTaskById && weeklyTaskById[task.id];

    if (!taskRecord || !taskRecord.completedAt)
      return { ...task, isDone: false };

    const monday = getMondayOfCurrentWeek();
    const completedDay = new Date(taskRecord.completedAt);

    return {
      ...task,
      isDone: monday - completedDay <= 0,
    };
  });
  return result;
};

// one time tasks - an array just saved the ids of the one time tasks
const getInitialOneTimeTasks = () => {
  const completedTaskIds = store.get('one-time-tasks');

  return OneTimeTasks.map((task) => ({
    ...task,
    isDone: completedTaskIds?.includes(task.id),
  }));
};

const TaskContextProvider = (props) => {
  const [dailyTasks, setDailyTasks] = useState(getInitialDailyTasks);
  const [weeklyTasks, setWeeklyTasks] = useState(getInitialWeeklyTasks);
  const [oneTimeTasks, setOneTimeTasks] = useState(getInitialOneTimeTasks);

  // dailyTasks, weeklyTasks, oneTimeTasks, outlines
  const outlines = Outlines;

  useEffect(() => {
    const dailyTaskById = store.get('daily-tasks');

    const updatedTaskById = dailyTasks.reduce((result, task) => {
      const now = new Date();
      const today = new Date(now.toDateString());

      // task hasn't been completed - don't save it in local storage
      if (!task.isDone) return result;

      // task has been done today - keep the record in local storage
      const alreadyDoneOnToday =
        dailyTaskById &&
        dailyTaskById[task.id] &&
        dailyTaskById[task.id].completedAt &&
        today - new Date(dailyTaskById[task.id].completedAt) === 0;
      if (alreadyDoneOnToday)
        return {
          ...result,
          [task.id]: {
            id: task.id,
            completedAt: dailyTaskById[task.id].completedAt,
          },
        };

      // task just finished - update the record in local storage
      return {
        ...result,
        [task.id]: { id: task.id, completedAt: now.toDateString() },
      };
    }, {});

    store.set('daily-tasks', updatedTaskById);
  }, [dailyTasks]);

  useEffect(() => {
    const weeklyTaskById = store.get('weekly-tasks');

    const updatedTaskById = weeklyTasks.reduce((result, task) => {
      const now = new Date();
      const monday = getMondayOfCurrentWeek();

      // task hasn't been completed - don't save it in local storage
      if (!task.isDone) return result;

      // task has been done today - keep the record in local storage
      const alreadyDoneOnThisWeek =
        weeklyTaskById &&
        weeklyTaskById[task.id] &&
        weeklyTaskById[task.id].completedAt &&
        monday - new Date(weeklyTaskById[task.id].completedAt) <= 0;
      if (alreadyDoneOnThisWeek)
        return {
          ...result,
          [task.id]: {
            id: task.id,
            completedAt: weeklyTaskById[task.id].completedAt,
          },
        };

      // task just finished - update the record in local storage
      return {
        ...result,
        [task.id]: { id: task.id, completedAt: now.toDateString() },
      };
    }, {});

    store.set('weekly-tasks', updatedTaskById);
  }, [weeklyTasks]);

  useEffect(() => {
    store.set(
      'one-time-tasks',
      oneTimeTasks.filter((task) => task.isDone).map((task) => task.id)
    );
  }, [oneTimeTasks]);

  const toggleTask = (taskId, type, isDone) => {
    switch (type) {
      case 'daily':
        setDailyTasks(
          dailyTasks.map((task) => {
            if (task.id === taskId) return { ...task, isDone };
            return task;
          })
        );
        break;
      case 'weekly':
        setWeeklyTasks(
          weeklyTasks.map((task) => {
            if (task.id === taskId) return { ...task, isDone };
            return task;
          })
        );
        break;
      case 'one-time':
        setOneTimeTasks(
          oneTimeTasks.map((task) => {
            if (task.id === taskId) return { ...task, isDone };
            return task;
          })
        );
        break;
      default:
        console.log(`task type '${type}' isn't supported.`);
        break;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        toggleTask,
        dailyTasks,
        weeklyTasks,
        oneTimeTasks,
        outlines,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

export default TaskContextProvider;
