import React from 'react';
import { useTasks } from 'contexts/TaskContext';

function TaskItem({ task, type }) {
  const { completeTask } = useTasks();

  const handleOnChange = (event) => {
    const { checked } = event.target;

    if (checked) {
      completeTask(task.id, type);
    }
  };

  return (
    <div>
      {type === 'daily' && (
        <input
          type="checkbox"
          onChange={handleOnChange}
          checked={task.isDone}
        />
      )}
      <span>{task.title}</span>
    </div>
  );
}

export default TaskItem;
