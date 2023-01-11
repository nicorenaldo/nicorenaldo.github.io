import { useEffect, useState } from 'react';

const useThemeDaisy = () => {
  const [currentTheme, setCurrentTheme] = useState('');

  // Respond to the `storage` event
  function toggleChangeTheme() {
    setCurrentTheme(localStorage.getItem('theme') ?? '');
  }

  useEffect(()=>{
    setCurrentTheme(localStorage.getItem('theme') ?? '');
  },[])

  return { currentTheme, toggleChangeTheme };
};

export default useThemeDaisy;
