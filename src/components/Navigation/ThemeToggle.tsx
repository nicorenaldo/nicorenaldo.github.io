import useThemeDaisy from '../../utils/useThemeDaisy';
import { MoonIcon, SunIcon } from '../Common/Icon';

const ThemeToggle = () => {
  const { currentTheme, toggleChangeTheme } = useThemeDaisy();

  return (
    <div className='form-control'>
      <label className='cursor-pointer flex gap-2 items-center'>
        <SunIcon />
          <input
          data-toggle-theme='dark,light'
            type='checkbox'
            className='toggle'
            onChange={() => toggleChangeTheme()}
            checked={currentTheme === 'dark'}
          />
        <MoonIcon />
      </label>
    </div>
  );
};

export default ThemeToggle