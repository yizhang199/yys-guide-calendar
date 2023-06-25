import React from 'react';
import TaskItem from './TaskItem';

// type: daily | weekly | one-time
function TaskGroup({ tasks, type }) {
  if (!tasks || tasks.length <= 0) return <div>No {type} tasks</div>;
  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem key={`${type}-task-${task.id}`} task={task} />;
      })}
    </div>
  );
}

export default TaskGroup;
