import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/common/Sidebar';

export const RootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Sidebar />
    </>
  );
};
