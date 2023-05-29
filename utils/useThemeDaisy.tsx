import { changeTheme } from '@/redux/appSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';

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
