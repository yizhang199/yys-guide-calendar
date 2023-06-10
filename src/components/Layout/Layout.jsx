import React from 'react';
import AppHeader from '../AppHeader/AppHeader';

import { Outlet } from 'react-router';

import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default Layout;
