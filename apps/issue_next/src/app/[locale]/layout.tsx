import { ReactNode } from 'react';

import Modal from '@repo/ui/src/components/modal/Modal';
import Popup from '@repo/ui/src/components/modal/Popup';
import ProgressModal from '@repo/ui/src/components/modal/ProgressModal';
import Toast from '@repo/ui/src/components/modal/Toast';
import { Provider } from 'jotai';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import ApolloClientProvider from '@/app/[locale]/ApolloClientProvider';
import Footer from '@/app/[locale]/Footer';
import Header from '@/app/[locale]/Header';
import '@/app/[locale]/globals.css';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'CLE',
  description: 'CLE 관리자 페이지',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className='bg-background relative'>
      <body className='flex h-screen flex-col justify-between gap-4 px-2 py-4'>
        <Provider>
          <NextIntlClientProvider>
            <ApolloClientProvider>
              <header>
                <Header />
              </header>
              <main className='flex flex-1 flex-col'>{children}</main>
              <footer>
                <Footer />
              </footer>
              <Modal />
              <Popup />
              <ProgressModal />
              <Toast />
            </ApolloClientProvider>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
