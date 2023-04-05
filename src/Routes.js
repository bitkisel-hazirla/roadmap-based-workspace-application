import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: '/timer', element: <Timer /> },
            { path: '/todoList', element: <ToDoList /> },
            { path: '/profile', element: <Profile /> },
            { path: '/suggestions', element: <Suggestions /> }
        ]
    }
]);

export default router;
