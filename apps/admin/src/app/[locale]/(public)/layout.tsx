import LanguageSwitch from '@/app/[locale]/LanguageSwitch';
import DarkModeToggle from '@repo/ui/src/app/ThemeMode';
import { ReactNode } from 'react';

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
