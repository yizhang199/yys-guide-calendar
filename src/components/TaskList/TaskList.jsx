import React from 'react';
import { useTasks } from 'contexts/TaskContext';
import TaskGroup from './TaskGroup';
import TaskOutlines from './TaskOutlines';

function TaskList({ day }) {
  const { dailyTasks, weeklyTasks, oneTimeTasks, outlines } = useTasks();

  return (
    <div>
      <TaskOutlines
        outline={outlines?.find(
          (outline) => outline.plannedCompletionDay === day
        )}
      />
      <TaskGroup tasks={dailyTasks} type="daily" />
      <TaskGroup tasks={weeklyTasks} type="weekly" />
      <TaskGroup tasks={filterTaskByDay(oneTimeTasks, day)} type="one-time" />
    </div>
  );
}

export default TaskList;

function filterTaskByDay(tasks, day) {
  return tasks?.filter((task) => task.plannedCompletionDay <= day);
}
