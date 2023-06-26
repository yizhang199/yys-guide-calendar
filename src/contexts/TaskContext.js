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

    console.log(completedDay, today);

    return {
      ...task,
      isDone: today - completedDay <= 0,
    };
  });

  console.log(result);

  return result;
};

const TaskContextProvider = (props) => {
  const [dailyTasks, setDailyTasks] = useState(getInitialDailyTasks);

  // dailyTasks, weeklyTasks, oneTimeTasks, outlines
  const weeklyTasks = WeeklyTasks;
  const oneTimeTasks = OneTimeTasks;
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
        dailyTaskById[task.id].completeAt &&
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

    console.log(updatedTaskById);

    store.set('daily-tasks', updatedTaskById);
  }, [dailyTasks]);

  const completeTask = (taskId, type) => {
    switch (type) {
      case 'daily':
        setDailyTasks(
          dailyTasks.map((task) => {
            if (task.id === taskId) return { ...task, isDone: true };
            return task;
          })
        );
        break;
      case 'weekly':
        break;
      case 'one-time':
        break;
      default:
        break;
    }
  };

  const undoCompleteTask = (taskId) => {};

  return (
    <TaskContext.Provider
      value={{
        completeTask,
        undoCompleteTask,
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
