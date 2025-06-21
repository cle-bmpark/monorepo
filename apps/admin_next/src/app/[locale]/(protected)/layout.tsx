import { ReactNode } from 'react';

import ThemeMode from '@repo/ui/src/app/ThemeMode';

import LanguageSwitch from '@/app/[locale]/LanguageSwitch';
import Navigation from '@/components/layout/Navigation';
import { MENU } from '@/dummy/Menu';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <nav className='fixed bottom-0 left-0 top-0 z-10'>
        <Navigation menu={MENU} />
      </nav>

      <div className='flex items-center justify-end gap-4'>
        <LanguageSwitch />
        <ThemeMode />
      </div>

      <div className='flex flex-1'>{children}</div>
    </>
  );
}
