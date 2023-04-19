import { RouterProvider } from 'react-router-dom';
import router from './Routes'

import logo from './logo.svg';

import './App.css';

function App() {
    return <RouterProvider router={router} />;
}

export default App;
