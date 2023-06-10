import React from 'react';
import { useParams } from 'react-router-dom';
import Guides from '../../data/guides.json';
import styles from './Detail.module.scss';

function Detail() {
  const { day } = useParams();

  const { tasks } = Guides[day] || {};

  if (!tasks) return <div>No Tasks Found For this day</div>;

  if (!Array.isArray(tasks) || tasks.length <= 0) return <div>All Done.</div>;

  return (
    <div className={styles.detail}>
      <div className={styles.taskList}>
        {tasks.map((task) => {
          const [taskName, taskInstruction] = task.split(':');
          return (
            <div className={styles.task}>
              <input type="checkbox" />
              <span className={styles.taskName}>{taskName}</span>
              {taskInstruction && (
                <span className={styles.taskInstruction}>
                  {taskInstruction}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Detail;
