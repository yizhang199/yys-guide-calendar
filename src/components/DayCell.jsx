import React from 'react';

import styles from './DayCell.module.scss';

const dateString = '24 May, 2023, 00:00:00';

function DayCell({ data, day }) {
  if (!data) return null;

  const { intro, tasks } = data;

  const startDate = new Date(Date.parse(dateString));
  startDate.setDate(startDate.getDate() + day);

  const dayOfWeek = startDate.toLocaleString('zh', { weekday: 'long' });

  const now = new Date();
  const isToday = now.getDate() === startDate.getDate();

  return (
    <>
      <div className={styles.dayOfWeek}>{dayOfWeek}</div>
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
