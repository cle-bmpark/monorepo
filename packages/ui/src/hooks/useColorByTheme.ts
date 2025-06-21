import { useEffect, useState } from 'react';

import { colors, darkColors } from '@ui/styles/color';

export function useColorByTheme(colorKey: keyof typeof colors): string {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(matcher.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    matcher.addEventListener('change', listener);
    return () => matcher.removeEventListener('change', listener);
  }, []);

  return isDark ? darkColors[colorKey] : colors[colorKey];
}
