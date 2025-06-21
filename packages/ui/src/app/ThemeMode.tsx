'use client';

import { useEffect, useState } from 'react';

import Toggle from '@ui/components/toggle/Toggle';
import UseSystemDarkMode from '@ui/hooks/useSystemDarkMode';

export default function ThemeMode() {
  const systemIsDark = UseSystemDarkMode();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(systemIsDark);
  }, [systemIsDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage['theme'] = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return <Toggle value={isDark} title={'Dark Mode'} onClick={toggleTheme} color='green' />;
}
