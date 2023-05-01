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
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'table',
        element: <Table />
      },
      {
        path: 'timer',
        element: <Timer />
      }
    ]
  },
  {
    path: '/authentication',
    element: <Authentication />
  },
  {
    path: '/roadmap',
    element: <Roadmap />
  }
]);

export default router;
