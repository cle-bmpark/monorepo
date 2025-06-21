'use client';

import { useRef } from 'react';

import Button from '@ui/components/button/Button';
import useClickOutside from '@ui/hooks/useClickOutside';
import useScrollLock from '@ui/hooks/useScrollLock';
import { progressAtom, progressDefault } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';

export default function ProgressModal() {
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
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-grey-950/40'>
      <div
        className='absolute top-1/2 left-1/2 flex flex-1 -translate-x-1/2 -translate-y-1/2 transform items-center justify-between gap-10 rounded-lg border border-grey-700 bg-grey-0 px-8 py-6 shadow-strong'
        ref={modalRef}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <h3>{progress.title}</h3>
            <p className='text-14 leading-20 font-400 text-grey-700'>
              ({progress.count}/{progress.total})
            </p>
          </div>
          <div className='relative flex h-1.5 w-[416px] rounded-full bg-grey-300'>
            <div
              className={`absolute top-0 left-0 z-20 h-1.5 rounded-full bg-primary-500`}
              style={{ width: `${416 * (progress.count / progress.total)}px` }}
            />
          </div>
        </div>
        <div className='flex w-72 items-center justify-between gap-2'>
          <Button
            value={(progress.buttonLabel ?? progress.handleSecondary) ? '취소' : '확인'}
            style='outline'
            onClick={handleFirstButton}
            isIcon={progress.handleSecondary ? false : true}
          />
          {progress.handleSecondary && (
            <Button
              value={progress.secondaryLabel ?? '확인'}
              style='secondary'
              onClick={handleSecondButton}
            />
          )}
        </div>
      </div>
    </div>
  );
}
