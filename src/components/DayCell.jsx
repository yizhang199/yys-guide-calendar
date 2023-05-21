import React from 'react';

import styles from './DayCell.module.scss';

function DayCell({ data }) {
  if (!data) return null;

  const { intro, tasks } = data;

  return (
    <>
      <h4 className={styles.intro}>{intro}</h4>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div className={styles.task} key="task">
            <input type="checkbox" />
            <span className={styles.taskName}>{task}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default DayCell;
