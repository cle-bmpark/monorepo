'use client';

import { useAutoPlacement } from '@ui/hooks/useAutoPlacement';
import useClickOutside from '@ui/hooks/useClickOutside';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

export default function TableSelectButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const t = useTranslations('main');
  const grey600 = useColorByTheme('grey-600');
  const { positionClass } = useAutoPlacement({
    triggerRef: containerRef,
    dropdownRef,
    isOpen,
    margin: 4,
  });

  const handleClickIcon = () => {
    setIsOpen(!isOpen);
  };
  const handleClickCopy = () => {
    setIsOpen(false);
  };
  const handleClickDelete = () => {
    setIsOpen(false);
  };

  useClickOutside({ ref: dropdownRef, onClick: () => setIsOpen(false) });

  return (
    <div ref={containerRef} className='relative'>
      <button
        className='hover:bg-grey-950/4 cursor-pointer rounded-sm p-4'
        onClick={handleClickIcon}
      >
        <PiDotsThreeOutlineVerticalFill width={16} height={16} color={grey600} />
      </button>

      {isOpen && (
        <ul
          ref={dropdownRef}
          className='text-medium-14 border-grey-300 shadow-light bg-grey-0 absolute z-10 min-w-max rounded-sm border'
        >
          <li>
            <button
              onClick={handleClickCopy}
              className='hover:bg-grey-950/4 cursor-pointer px-4 py-2'
            >
              {t('copy')}
            </button>
          </li>
          <li>
            <button
              onClick={handleClickDelete}
              className={`hover:bg-grey-950/4 cursor-pointer px-4 py-2 ${positionClass}`}
            >
              {t('delete')}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
