'use client';

import { detailData } from '@/dummy/HMGMA';
import Tooltip from '@repo/ui/src/components/modal/Tooltip';
import useClickOutside from '@repo/ui/src/hooks/useClickOutside';
import { useColorByTheme } from '@repo/ui/src/hooks/useColorByTheme';
import { SetStateAction } from 'jotai';
import { useTranslations } from 'next-intl';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import DriverInfo from './[id]/DriverInfo';
import ProgramInfo from './[id]/ProgramInfo';
import DefaultInfo from './DefaultInfo';

interface CompareModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  serialNumbers: string[];
  setSerialNumbers: Dispatch<SetStateAction<string[]>>;
}

export default function CompareModal({
  visible,
  setVisible,
  serialNumbers,
  setSerialNumbers,
}: CompareModalProps) {
  const data = detailData;
  const grey300 = useColorByTheme('grey-300');
  const tHMGMA = useTranslations('hmgma');
  const iconRef = useRef<HTMLDivElement>(null);

  const [isOpenIcon, setIsOpenIcon] = useState<boolean>(false);
  useClickOutside({
    ref: iconRef,
    onClick: () => setIsOpenIcon(false),
  });

  useEffect(() => {
    if (serialNumbers.length < 1) setVisible(false);
  }, [serialNumbers, setVisible]);

  useEffect(() => {
    // esc 키 클릭 시, 모달창 닫기
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setVisible]);

  if (!visible) return null;
  return (
    <div className='bg-grey-950/40 fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-1 flex-wrap justify-between gap-4 overflow-y-auto p-4'>
      <div className='absolute flex justify-center p-4' ref={iconRef}>
        {/* tooltip icon */}
        <BsInfoCircle
          size={20}
          color={grey300}
          cursor='pointer'
          onClick={() => setIsOpenIcon(true)}
          className='cursor-pointer'
        />
        {isOpenIcon && (
          <div className='w-3xs absolute left-4 top-4 z-10'>
            <Tooltip detail={tHMGMA('esc-close-context')} isTriangle={false} />
          </div>
        )}
      </div>

      {serialNumbers.map((item) => (
        <div
          key={`compare_serial_number_${item}`}
          className={`bg-grey-0 flex min-w-fit flex-1 flex-col gap-4 rounded-lg p-4 ${!data.default.isProgram && 'outline-primary-500 outline-2'}`}
        >
          {/* close icon */}
          <div className='flex items-center justify-end gap-2'>
            <IoCloseCircle
              size={24}
              color={grey300}
              className='cursor-pointer'
              onClick={() => setSerialNumbers((prev) => prev.filter((numbers) => numbers !== item))}
            />
          </div>

          {/* content */}
          <DefaultInfo data={data.default} />
          <DriverInfo data={data.driver} />
          <ProgramInfo data={data.program} />
        </div>
      ))}
    </div>
  );
}
