import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DayCell.module.scss';

const dateString = '24 May, 2023, 00:00:00';

function DayCell({ data, day }) {
  if (!data) return null;

  const { intro, tasks, goals } = data;

  const startDate = new Date(Date.parse(dateString));
  startDate.setDate(startDate.getDate() + day - 1);

  const dayOfWeek = startDate.toLocaleString('zh', { weekday: 'long' });

  const now = new Date();
  const isToday = now.getDate() === startDate.getDate();

  const handleOnOpenDetailClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.dayCell}>
      <div className={styles.goalList}>
        {goals?.map((task) => (
          <div className={styles.goal} key={task}>
            <span className={styles.indicator}></span>
            <span className={styles.goalName}>{task}</span>
          </div>
        ))}
      </div>
      <NavLink className={styles.goToDetailLink} to={`detail/${day}`}>
        详细流程
      </NavLink>
    </div>
  );
}

export default DayCell;
