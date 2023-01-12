import { useEffect } from 'react';
import { changeTheme } from '../app/Redux/appSlice';
import { useAppDispatch } from '../app/Redux/hooks';

const useThemeDaisy = () => {
  const dispatch = useAppDispatch();

  // Respond to the `storage` event
  function toggleChangeTheme() {
    dispatch(changeTheme(localStorage.getItem('theme')));
  }

  useEffect(() => {
    dispatch(changeTheme(localStorage.getItem('theme')));
  }, [dispatch]);

  return { toggleChangeTheme };
};

export default useThemeDaisy;
