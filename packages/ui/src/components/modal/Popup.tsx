'use client';

import Button from '@ui/components/button/Button';
import useClickOutside from '@ui/hooks/useClickOutside';
import useScrollLock from '@ui/hooks/useScrollLock';
import { popupAtom, popupDefault } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useRef } from 'react';

export default function Popup() {
  const popupRef = useRef<HTMLDivElement>(null);
  const [popup, setPopup] = useAtom(popupAtom);

  useClickOutside({ ref: popupRef, onClick: () => setPopup(popupDefault) });
  useScrollLock(popup.visible);

  if (!popup.visible) return null;
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-grey-950/40'>
      <div
        className='absolute top-1/2 left-1/2 flex max-h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-8 rounded-2xl border border-grey-200 bg-grey-0 p-6 shadow-strong'
        ref={popupRef}
      >
        {/* context */}
        <div className='flex flex-1 flex-col gap-2'>
          <h2>{popup.title}</h2>
          <p className='text-16 leading-24 text-grey-700'>{popup.content}</p>
        </div>

        {/* button */}
        <div className='flex items-center justify-end gap-2.5'>
          {popup.onCancel && (
            <div className='flex w-[120px]'>
              <Button
                value={popup.cancelLabel ?? '취소'}
                style='outline'
                onClick={() => {
                  popup.onCancel?.();
                  setPopup(popupDefault);
                }}
              />
            </div>
          )}
          <div className='flex w-[120px]'>
            <Button
              value={popup.confirmLabel ?? '확인'}
              style='secondary'
              onClick={() => {
                popup.onConfirm?.();
                setPopup(popupDefault);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
