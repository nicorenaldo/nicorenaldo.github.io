import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../Navigation/Sidebar';

const GenericLayout = () => {
  return (
    <div className='drawer drawer-end min-h-screen prose max-w-none'>
      <input id='navbar-drawer' type='checkbox' className='drawer-toggle' />

      <div className='drawer-content'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

      <Sidebar />
    </div>
  );
};

export default GenericLayout;
