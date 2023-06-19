import React from 'react';

import styles from './SlideButton.module.scss';

const SlideButton = ({ checked, handleToggle, label }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles['slide-button']}>
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
      {label && <span>{label}</span>}
    </div>
  );
};

export default SlideButton;
