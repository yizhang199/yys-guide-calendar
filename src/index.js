import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './pages/Detail/Detail';
import Secrets from './pages/Secrets/Secrets';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Secret from './pages/Secret/Secret';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
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
          children: [
            {
              path: ':name',
              element: <Secret />,
            },
          ],
        },
      ],
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
