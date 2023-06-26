import React from 'react';
import TaskItem from './TaskItem';

// type: daily | weekly | one-time
function TaskGroup({ tasks, type }) {
  if (!tasks || tasks.length <= 0) return <div>No {type} tasks</div>;
  return (
    <div>
      <h3>{type}</h3>
      {tasks.map((task) => {
        return (
          <TaskItem key={`${type}-task-${task.id}`} task={task} type={type} />
        );
      })}
    </div>
  );
}

export default TaskGroup;
