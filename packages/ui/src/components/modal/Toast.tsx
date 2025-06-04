'use client';

import useClickOutside from '@ui/hooks/useClickOutside';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { toastAtom, toastDefault } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { IoCheckmarkCircleOutline, IoClose, IoInformationCircle, IoWarning } from 'react-icons/io5';

export default function Toast() {
  const toastRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useAtom(toastAtom);

  const [isSlide, setIsSlide] = useState(true);

  const neogreen500 = useColorByTheme('neo-green-500');
  const primary500 = useColorByTheme('primary-500');
  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');
  const grey700 = useColorByTheme('grey-700');

  const variantStyle = {
    dark: { wrapper: 'bg-grey-900/90', text: 'text-grey-0' },
    light: { wrapper: 'bg-grey-0', text: 'text-grey-950' },
  };

  const handleClose = () => {
    setIsSlide(false);
    setTimeout(() => {
      setToast(toastDefault);
      setIsSlide(true);
    }, 300);
  };

  useEffect(() => {
    // 애니메이션 효과
    if (toast.visible) {
      const timer = setTimeout(() => {
        setIsSlide(false);
        setTimeout(() => {
          setToast(toastDefault);
          setIsSlide(true);
        }, 300);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toast.visible, setToast]);

  useClickOutside({ ref: toastRef, onClick: handleClose });

  if (!toast.visible) return null;

  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20'>
      <div
        className={`absolute top-5/6 left-1/2 flex -translate-x-1/2 -translate-y-5/6 transform ${isSlide ? 'animate-slide-in' : 'animate-slide-out'}`}
        ref={toastRef}
      >
        <div
          className={`flex max-w-3xs min-w-96 items-center justify-between gap-2 rounded-lg px-4 py-3.5 shadow-light ${variantStyle[toast.style ?? 'dark'].wrapper}`}
        >
          {(toast.icon === 'check' || !toast.icon) && (
            <IoCheckmarkCircleOutline color={neogreen500} size={20} />
          )}
          {toast.icon === 'warn' && <IoWarning color={primary500} size={20} />}
          {toast.icon === 'info' && <IoInformationCircle color={grey300} size={20} />}
          <p
            className={`flex flex-1 text-14 leading-20 ${variantStyle[toast.style ?? 'dark'].text}`}
          >
            {toast.text}
          </p>
          <IoClose
            color={toast.style === 'dark' ? grey500 : grey700}
            size={16}
            className='cursor-pointer'
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
}
