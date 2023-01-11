import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <>
      {/* Desktop  */}
      <div className='hidden md:flex justify-between items-center p-8 xl:pl-24'>
        <div className='flex md:gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
        </div>

        {/* Dark Mode Toggle */}
        <ThemeToggle />
      </div>

      {/* Mobile  */}
      <div className='block md:hidden m-4 text-end'>
        <label htmlFor='navbar-drawer' className='drawer-button'>
            <MenuIcon className='text-dark' />
        </label>
      </div>
    </>
  );
};

export default Navbar;
