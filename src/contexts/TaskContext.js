import React, { createContext, useContext, useEffect, useState } from 'react';
import { Tasks } from 'data/tasks';
import store from 'store2';

export const TaskContext = createContext();

const getInitialTasks = () => {
  const heroIds = store.get('tasks');

  const herosArr = Object.values(Tasks);

  if (!Array.isArray(heroIds))
    return herosArr.map((hero) => ({ ...hero, obtained: false }));

  return herosArr.map((hero) => ({
    ...hero,
    obtained: heroIds.includes(hero.id),
  }));
};

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    // saved obtained heros id into localStorage.
    store.set(
      'tasks',
      tasks.filter((task) => task.isDone).map((task) => task.id)
    );
  }, [tasks]);

  const completeTask = (taskId) => {};

  const undoCompleteTask = (taskId) => {};

  return (
    <TaskContext.Provider value={{ tasks, completeTask, undoCompleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export const useHeros = () => useContext(TaskContext);

export default TaskContextProvider;
