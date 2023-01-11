import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useThemeDaisy from '../../utils/useThemeDaisy';
import { MoonIcon, SunIcon } from '../Common/Icon';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClickMenu = () => setOpenMenu(!openMenu);

  const { currentTheme, toggleChangeTheme } = useThemeDaisy();

  return (
    <>
      <div className='hidden md:flex justify-between items-center p-8 xl:pl-24'>
        <div className='flex md:gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
        </div>

        <div className='form-control'>
          <label className='label cursor-pointer flex gap-2 items-center'>
            <SunIcon />
            <button data-toggle-theme='dark,light'>
              <input
                type='checkbox'
                className='toggle'
                onClick={() => toggleChangeTheme()}
                checked={currentTheme === 'dark'}
              />
            </button>
            <MoonIcon />
          </label>
        </div>
      </div>

      <div className='block md:hidden m-4'>
        <div className='z-0 w-full text-end py-2'>
          <button type='button' onClick={handleClickMenu}>
            <MenuIcon className='text-dark' />
          </button>
        </div>
        {openMenu && (
          <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
            <div className='bg-neutral-50 shadow w-full flex flex-col gap-2 text-end absolute right-0 p-4'>
              <Link to='/'>Home</Link>
              <Link to='/blogs'>Blogs</Link>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </>
  );
};

export default Navbar;
