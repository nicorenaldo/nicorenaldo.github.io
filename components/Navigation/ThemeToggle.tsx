'use client';

import { selectApp } from '@/redux/appSlice';
import { useAppSelector } from '@/redux/hooks';
import useThemeDaisy from '@/utils/useThemeDaisy';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { MoonIcon, SunIcon } from '../Common/Icon';

const ThemeToggle = () => {
  const { toggleChangeTheme } = useThemeDaisy();
  const { theme: currentTheme } = useAppSelector(selectApp);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className='form-control z-10'>
      <label className='cursor-pointer flex gap-2 items-center'>
        <SunIcon />
        <input
          data-toggle-theme='black,light'
          type='checkbox'
          className='toggle'
          onChange={() => toggleChangeTheme()}
          checked={currentTheme === 'black'}
        />
        <MoonIcon />
      </label>
    </div>
  );
};

export default ThemeToggle;
