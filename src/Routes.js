import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';
import { RootLayout } from './pages/RootLayout';
import { Table } from './components/Table';
import { Timer } from './pages/Timer';
import { Roadmap } from './pages/Roadmap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'tasks',
        element: <Table />
      },
      {
        path: 'timer',
        element: <Timer />
      }
    ]
  },
  {
    path: '/login',
    element: <Authentication initialPage={'login'} />
  },
  {
    path: '/signup',
    element: <Authentication initialPage={'signup'} />
  },
  {
    path: '/roadmap',
    element: <Roadmap />
  }
]);

export default router;
