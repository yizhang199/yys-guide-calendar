import React from 'react';

function TaskOutlines({ outlines }) {
  if (!outlines || outlines.length <= 0) return null;

  return (
    <div>
      {outlines.map((outline) => (
        <div key={outline}>{outline.title}</div>
      ))}
    </div>
  );
}

export default TaskOutlines;
