import React, { createContext, useContext, useEffect, useState } from 'react';
import { OneTimeTasks, WeeklyTasks, DailyTasks, Outlines } from 'data/tasks';
import store from 'store2';

export const TaskContext = createContext();

const getInitialTasks = () => {
  // const heroIds = store.get('tasks');
  // const herosArr = Object.values(Tasks);
  // if (!Array.isArray(heroIds))
  //   return herosArr.map((hero) => ({ ...hero, obtained: false }));
  // return herosArr.map((hero) => ({
  //   ...hero,
  //   obtained: heroIds.includes(hero.id),
  // }));
};

const TaskContextProvider = (props) => {
  // const [tasks, setTasks] = useState(getInitialTasks);

  // dailyTasks, weeklyTasks, oneTimeTasks, outlines
  const dailyTasks = DailyTasks;
  const weeklyTasks = WeeklyTasks;
  const oneTimeTasks = OneTimeTasks;
  const outlines = Outlines;

  // useEffect(() => {
  // update task isDone status in localStorage.
  // store.set(
  //   'tasks',
  //   tasks.filter((task) => task.isDone).map((task) => task.id)
  // );
  // }, [tasks]);

  const completeTask = (taskId) => {};

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
