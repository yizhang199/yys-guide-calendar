import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './pages/Detail/Detail';
import Secrets from './pages/Secrets/Secrets';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'detail/:day',
      element: <Detail />,
    },
    {
      path: 'secrets',
      element: <Secrets />,
    },
  ],
  { basename: '/yys-guide-calendar' }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
