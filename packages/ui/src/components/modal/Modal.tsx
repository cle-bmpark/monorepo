'use client';

import Button from '@repo/ui/src/components/button/Button';
import useClickOutside from '@repo/ui/src/hooks/useClickOutside';
import { useColorByTheme } from '@repo/ui/src/hooks/useColorByTheme';
import useScrollLock from '@repo/ui/src/hooks/useScrollLock';
import { modalAtom, modalDefault } from '@repo/ui/src/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useRef } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

export default function Modal() {
  const grey300 = useColorByTheme('grey-300');
  const modalRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useAtom(modalAtom);

  useClickOutside({
    ref: modalRef,
    onClick: () => setModal(modalDefault),
  });
  useScrollLock(modal.visible);

  if (!modal.visible) return null;
  return (
    <div className='bg-grey-950/40 fixed top-0 right-0 bottom-0 left-0 z-20'>
      <div
        className='bg-grey-0 shadow-strong absolute top-1/2 left-1/2 flex w-[830px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl'
        ref={modalRef}
      >
        {/* header */}
        <div className='flex items-center justify-between gap-4 px-4 py-[26px]'>
          <h2>{modal.title}</h2>
          <IoCloseCircle
            size={24}
            color={grey300}
            className='cursor-pointer'
            onClick={() => setModal(modalDefault)}
          />
        </div>
        {/* context */}
        <div className='max-h-[511px] overflow-y-auto px-6 pb-10'>{modal.content}</div>
        {/* button */}
        <div className='flex items-center justify-end gap-2.5 px-6 py-4'>
          {modal.onCancel && (
            <div className='flex w-[120px]'>
              <Button
                value={modal.cancelLabel ?? '취소'}
                style='outline'
                onClick={() => {
                  modal.onCancel?.();
                  setModal(modalDefault);
                }}
              />
            </div>
          )}
          <div className='flex w-[120px]'>
            <Button
              value={modal.confirmLabel ?? '확인'}
              style='secondary'
              onClick={() => {
                modal.onConfirm?.();
                setModal(modalDefault);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
