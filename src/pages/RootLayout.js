import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/common/Sidebar';

export const RootLayout = () => {
  return (
    <div style={{backgroundColor:'#DEE7FF'}} className='flex h-full'>
      <Sidebar />
      <main className='w-full h-full'>
        <Outlet />
      </main>
    </div>
  );
};
