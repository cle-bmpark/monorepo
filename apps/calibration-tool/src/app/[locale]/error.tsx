'use client';

import Button from '@repo/ui/src/components/button/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardReturn } from 'react-icons/md';

export default function Error() {
  const router = useRouter();
  const t = useTranslations('error');

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-12'>
      <p className='text-primary-500 animate-bounce text-9xl font-extrabold'>Oops!</p>
      <h1>{t('title')}</h1>
      <div className='flex flex-col justify-center gap-4'>
        <p>{t('content')}</p>
        <div className='flex gap-2'>
          <Button
            value={t('backButton')}
            onClick={() => router.back()}
            isIcon
            icon={<MdOutlineKeyboardReturn />}
            style='secondary'
          />
          <Button
            value={t('refreshButton')}
            onClick={() => window.location.reload()}
            isIcon
            icon={<MdOutlineKeyboardReturn />}
            style='secondary'
          />
        </div>
      </div>
    </div>
  );
}
