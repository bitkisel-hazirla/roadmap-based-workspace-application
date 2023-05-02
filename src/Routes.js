import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';
import { Roadmap } from './pages/Roadmap';
import { RootLayout } from './pages/RootLayout';
import { Table } from './components/Table';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path:'/',
        element:<Home/>,
        
      },
      {
        path: 'tasks',
        element: <Table />
      }
    ]
  },
  {
    path:'/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Authentication />
  },
  {
    path: '/signup',
    element: <Authentication />
  },
  {
    path: '/roadmap',
    element: <Roadmap />
  }
]);

export default router;
