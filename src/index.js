import React from 'react';
import ReactDOM from 'react-dom/client';
import Detail from 'pages/Detail/Detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Heros from 'pages/Heros/Heros';
import Secret from 'pages/Secret/Secret';
import Secrets from 'pages/Secrets/Secrets';
import Layout from 'components/Layout/Layout';
import HeroContextProvider from 'contexts/HeroContext';
import SecretContextProvider from 'contexts/SecretContext';

import './index.css';

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
        {
          path: 'heroes',
          element: <Heros />,
        },
      ],
    },
  ],
  { basename: '/yys-guide-calendar' }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroContextProvider>
      <SecretContextProvider>
        <RouterProvider router={router} />
      </SecretContextProvider>
    </HeroContextProvider>
  </React.StrictMode>
);
