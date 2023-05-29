'use client';

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <>
      {/* Desktop  */}
      <div className='hidden md:flex justify-between items-center p-8 xl:pl-24'>
        <div className='flex md:gap-4 z-10'>
          <Link href='/' aria-label='Navigate to home'>
            Home
          </Link>
          <Link href='/blog' aria-label='Navigate to blogs'>
            Blogs
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <ThemeToggle />
      </div>

      {/* Mobile  */}
      <div className='block md:hidden m-4 text-end z-10'>
        <label htmlFor='navbar-drawer' className='drawer-button z-10'>
          <MenuIcon className='z-10' />
        </label>
      </div>
    </>
  );
};

export default Navbar;
