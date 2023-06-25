import React from 'react';
import { useTasks } from 'contexts/TaskContext';
import TaskGroup from './TaskGroup';
import TaskOutlines from './TaskOutlines';

function TaskList() {
  const { dailyTasks, weeklyTasks, oneTimeTasks, outlines } = useTasks();

  return (
    <div>
      <TaskOutlines outlines={outlines} />
      <TaskGroup tasks={dailyTasks} type="daily" />
      <TaskGroup tasks={weeklyTasks} type="weekly" />
      <TaskGroup tasks={oneTimeTasks} type="one-time" />
    </div>
  );
}

export default TaskList;
