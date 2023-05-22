import React from 'react';

import styles from './DayCell.module.scss';

const dateString = '24 May, 2023, 00:00:00';

function DayCell({ data }) {
  if (!data) return null;

  const { intro, tasks,  day} = data;

  const startDate = new Date(Date.parse(dateString));
  startDate.setDate(startDate.getDate() + day - 1);

  const dayOfWeek = startDate.toLocaleString('zh', { weekday: 'long' });

  const now = new Date();
  const isToday = now.getDate() === startDate.getDate();

  const handleOnOpenDetailClick = (e) => {
    e.preventDefault();


  }

  return (
    <div className={styles.dayCell}>
      <div className={styles.header}>
        <span>{dayOfWeek}</span>
        <small>{`Day ${day.toString().padStart(2,'0')}`}</small>
      </div>
      <h4 className={styles.intro}>{intro}</h4>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div className={styles.task} key="task">
            <input type="checkbox" />
            <span className={styles.taskName}>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayCell;
