import { ReactNode } from 'react';

import DarkModeToggle from '@repo/ui/src/app/ThemeMode';

import LanguageSwitch from '@/app/[locale]/LanguageSwitch';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className='flex items-center justify-end gap-4'>
        <LanguageSwitch />
        <DarkModeToggle />
      </div>

      <div className='flex flex-1'>{children}</div>
    </>
  );
}
