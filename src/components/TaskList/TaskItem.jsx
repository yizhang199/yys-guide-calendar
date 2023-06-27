import React from 'react';
import { useTasks } from 'contexts/TaskContext';

function TaskItem({ task, type }) {
  const { toggleTask } = useTasks();

  const handleOnChange = (event) => {
    const { checked } = event.target;

    toggleTask(task.id, type, checked);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleOnChange} checked={task.isDone} />
      <span>{task.title}</span>
    </div>
  );
}

export default TaskItem;
