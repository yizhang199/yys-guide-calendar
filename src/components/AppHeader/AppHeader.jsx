import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AppHeader.module.scss';

const navButtons = [
  { label: '每日目标', to: '/' },
  { label: '秘闻副本', to: '/secrets' },
  { label: '式神养成', to: '/heros' },
];

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      {navButtons.map((nav) => (
        <NavLink
          key={nav.label}
          className={({ isActive, isPending }) =>
            `${styles.navLink} ${isActive ? styles.active : ''} ${
              isPending ? styles.pending : ''
            }`
          }
          to={nav.to}
        >
          {nav.label}
        </NavLink>
      ))}
    </div>
  );
}

export default AppHeader;
