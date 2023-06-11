import React from 'react';

import styles from './SlideButton.module.scss';

const SlideButton = ({ checked, handleToggle }) => {
  return (
    <label className={styles['slide-button']}>
      <input type="checkbox" checked={checked} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default SlideButton;
