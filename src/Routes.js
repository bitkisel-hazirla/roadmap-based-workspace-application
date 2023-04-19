import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            // { index: true, element: <Dashboard /> },
            // { path: '/timer', element: <Timer /> },
            // { path: '/todoList', element: <ToDoList /> },
            // { path: '/profile', element: <Profile /> },
            // { path: '/suggestions', element: <Suggestions /> }
        ]
    }
]);

export default router;
