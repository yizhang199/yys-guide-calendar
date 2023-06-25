import { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import Guides from './data/guides.json';
import { NEW_SERVER_LAUNCH_DATE } from 'data/Date';
// import DayCell from './components/DayCell/DayCell';
import TaskList from 'components/TaskList/TaskList';

// const dateString = '24 May, 2023, 00:00:00';

function App() {
  const navigationRef = useRef();
  const [activeDay, setActiveDay] = useState(() => {
    const startDate = new Date(Date.parse(NEW_SERVER_LAUNCH_DATE));
    const now = new Date();

    if (now < startDate) return 1;

    // Calculate the difference in milliseconds
    const diffInMilliseconds = Math.abs(now - startDate);

    // Convert the difference to days
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays > 13) return 1;

    return diffInDays;
  });

  const handleNavButtonClick = (event) => {
    event.preventDefault();

    const { day } = event.target.dataset;
    if (Number(day) === activeDay) return;

    const container = navigationRef.current;
    const scrollLeft = event.target.offsetLeft - container.offsetLeft - 80;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });

    setActiveDay(Number(day) || 1);
  };

  return (
    <div className={styles.app}>
      <div className={styles.navigation} ref={navigationRef}>
        {Array.from({ length: 13 }).map((_, index) => {
          const startDate = new Date(Date.parse(NEW_SERVER_LAUNCH_DATE));
          startDate.setDate(startDate.getDate() + index);
          const dayOfWeek = startDate.toLocaleString('zh', {
            weekday: 'short',
          });
          const day = Guides[index + 1];
          if (!day) return null;
          return (
            <button
              key={`nav-button-${index}`}
              data-day={index + 1}
              className={classNames(styles.navButton, {
                [styles.active]: index + 1 === activeDay,
              })}
              onClick={handleNavButtonClick}
            >
              <small>{dayOfWeek}</small>
              <span>{startDate.getDate().toString().padStart(2, '0')}</span>
            </button>
          );
        })}
      </div>
      {/* <DayCell data={Guides[activeDay]} day={activeDay} /> */}
      <TaskList day={activeDay} />
    </div>
  );
}

export default App;
