import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'components/Card/Card';

import styles from './AppHeader.module.scss';

const navButtons = [
  { label: '日历', to: '/', description: '每日任务安排' },
  { label: '式神', to: '/heroes', description: '式神养成记录,' },
  { label: '秘闻', to: '/secrets', description: '秘闻副本攻略,可获取大量资源' },
];

function AppHeader() {
  return (
    <Card className={styles.appHeader}>
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
          <i className="icons">gouyu</i>
          <span>{nav.label}</span>
        </NavLink>
      ))}
    </Card>
  );
}

export default AppHeader;
