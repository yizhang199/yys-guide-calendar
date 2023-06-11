import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AppHeader.module.scss';

const navButtons = [
  { label: '日历', to: '/' },
  { label: '式神', to: '/heroes' },
  { label: '秘闻', to: '/secrets' },
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
