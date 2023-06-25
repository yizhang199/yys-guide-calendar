import React from 'react';

function TaskOutlines({ outline }) {
  if (!outline) return null;

  const { note } = outline;

  return (
    <div>
      <div>{note}</div>
    </div>
  );
}

export default TaskOutlines;
