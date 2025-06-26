import { ReactNode } from 'react';

import Modal from '@repo/ui/src/components/modal/Modal';
import Popup from '@repo/ui/src/components/modal/Popup';
import ProgressModal from '@repo/ui/src/components/modal/ProgressModal';
import Toast from '@repo/ui/src/components/modal/Toast';
import { Provider } from 'jotai';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import Footer from '@/app/[locale]/Footer';
import '@/app/[locale]/globals.css';
import { routing } from '@/i18n/routing';
import ClientProvider from './ClientProvider';

export const metadata: Metadata = {
  title: 'CLE Labeling',
  description: 'CLE 라벨링 프로그램',
  icons: { icon: '/logo.svg' },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className='bg-background relative'>
      <body className='min-w-3xl flex h-screen flex-col justify-between'>
        <Provider>
          <NextIntlClientProvider>
            <ClientProvider>
              <main className='flex flex-1 flex-col'>{children}</main>
              <footer className='border-grey-500 border-t'>
                <Footer />
              </footer>
              <Modal />
              <Popup />
              <ProgressModal />
              <Toast />
            </ClientProvider>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
