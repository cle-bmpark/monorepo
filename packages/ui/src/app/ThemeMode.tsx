'use client';

import Toggle from '@repo/ui/src/components/toggle/Toggle';
import UseSystemDarkMode from '@repo/ui/src/hooks/useSystemDarkMode';
import { useEffect, useState } from 'react';

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
