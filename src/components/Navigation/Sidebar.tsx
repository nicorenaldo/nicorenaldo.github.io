import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  return (
    <div className='drawer-side'>
      <label htmlFor='navbar-drawer' className='drawer-overlay'></label>

      <div className='menu bg-base-100 w-1/2 flex flex-col py-4'>
        {/* Dark Mode Toggle */}
        <div className='my-4 px-4 flex justify-end w-full'>
        <ThemeToggle /> 
        </div>

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
