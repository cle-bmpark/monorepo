import '@repo/ui/src/app/globals.css';
import ThemeMode from '@repo/ui/src/app/ThemeMode';
import Footer from '@repo/ui/src/components/layout/Footer';
import Navigation from '@repo/ui/src/components/layout/Navigation';
import Modal from '@repo/ui/src/components/modal/Modal';
import Popup from '@repo/ui/src/components/modal/Popup';
import ProgressModal from '@repo/ui/src/components/modal/ProgressModal';
import Toast from '@repo/ui/src/components/modal/Toast';
import { MENU } from '@repo/ui/src/dummy/Menu';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLE',
  description: 'CLE 관리자 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return (
    <html lang='ko' className='bg-background relative'>
      <body className='flex h-screen min-w-3xl flex-col justify-between px-40 pt-9'>
        <main className='flex flex-1 flex-col'>
          <nav className='fixed top-0 bottom-0 left-0 z-10'>
            <Navigation menu={MENU} />
          </nav>
          <div className='flex items-center justify-end gap-4'>
            <ThemeMode />
          </div>
          <div className='flex flex-1'>{children}</div>
        </main>
        <footer className='my-10'>
          <Footer />
        </footer>
        <Modal />
        <Popup />
        <ProgressModal />
        <Toast />
      </body>
    </html>
  );
}
