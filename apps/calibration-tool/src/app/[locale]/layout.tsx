import { ReactNode } from 'react';

import Modal from '@repo/ui/src/components/modal/Modal';
import Popup from '@repo/ui/src/components/modal/Popup';
import ProgressModal from '@repo/ui/src/components/modal/ProgressModal';
import Toast from '@repo/ui/src/components/modal/Toast';
import { Provider } from 'jotai';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import '@/app/[locale]/globals.css';
import Footer from '@/components/Footer';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'CLE',
  description: 'CLE',
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
      <body className='flex h-dvh w-dvw flex-1 flex-col items-center justify-between'>
        <Provider>
          <NextIntlClientProvider>
            <main className='flex flex-1'>{children}</main>
            <footer>
              <Footer />
            </footer>
            <Modal />
            <Popup />
            <ProgressModal />
            <Toast />
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
