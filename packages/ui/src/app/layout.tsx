import { ReactNode } from 'react';

import ThemeMode from '@ui/app/ThemeMode';
import '@ui/app/globals.css';
import Footer from '@ui/components/layout/Footer';
import Navigation from '@ui/components/layout/Navigation';
import Modal from '@ui/components/modal/Modal';
import Popup from '@ui/components/modal/Popup';
import ProgressModal from '@ui/components/modal/ProgressModal';
import Toast from '@ui/components/modal/Toast';
import { MENU } from '@ui/dummy/Menu';
import type { Metadata } from 'next';

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
    <html lang='ko' className='relative bg-background'>
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
