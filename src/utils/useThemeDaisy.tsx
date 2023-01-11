import { useState } from 'react';

const useThemeDaisy = () => {
  const [currentTheme, setCurrentTheme] = useState('');

  // Respond to the `storage` event
  function toggleChangeTheme() {
    setCurrentTheme(localStorage.getItem('theme') ?? '');
  }

  return { currentTheme, toggleChangeTheme };
};

export default useThemeDaisy;
