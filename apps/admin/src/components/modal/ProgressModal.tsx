'use client';

import Button from '@/components/button/Button';
import useClickOutside from '@/hooks/useClickOutside';
import useScrollLock from '@/hooks/useScrollLock';
import { progressAtom, progressDefault } from '@/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function ProgressModal() {
  const t = useTranslations('modal');
  const modalRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useAtom(progressAtom);

  const handleFirstButton = () => {
    if (progress.onClick) progress.onClick();
    setProgress(progressDefault);
  };
  const handleSecondButton = () => {
    if (progress.handleSecondary) progress.handleSecondary();
    setProgress(progressDefault);
  };

  useClickOutside({ ref: modalRef, onClick: () => setProgress(progressDefault) });
  useScrollLock(progress.visible);

  if (!progress.visible) return null;
  return (
    <div className='bg-grey-950/40 fixed bottom-0 left-0 right-0 top-0 z-20'>
      <div
        className='border-grey-700 bg-grey-0 shadow-strong absolute left-1/2 top-1/2 flex flex-1 -translate-x-1/2 -translate-y-1/2 transform items-center justify-between gap-10 rounded-lg border px-8 py-6'
        ref={modalRef}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <h3>{progress.title}</h3>
            <p className='text-14 leading-20 font-400 text-grey-700'>
              ({progress.count}/{progress.total})
            </p>
          </div>
          <div className='bg-grey-300 relative flex h-1.5 w-[416px] rounded-full'>
            <div
              className={`bg-primary-500 absolute left-0 top-0 z-20 h-1.5 rounded-full`}
              style={{ width: `${416 * (progress.count / progress.total)}px` }}
            />
          </div>
        </div>
        <div className='flex w-72 items-center justify-between gap-2'>
          <Button
            value={
              (progress.buttonLabel ?? progress.handleSecondary)
                ? t('cancelLabel')
                : t('confirmLabel')
            }
            style='outline'
            onClick={handleFirstButton}
            isIcon={progress.handleSecondary ? false : true}
          />
          {progress.handleSecondary && (
            <Button
              value={progress.secondaryLabel ?? t('confirmLabel')}
              style='secondary'
              onClick={handleSecondButton}
            />
          )}
        </div>
      </div>
    </div>
  );
}
