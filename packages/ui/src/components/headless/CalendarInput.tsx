import { useRef, useState } from 'react';

import Calendar, { DateRange } from '@ui/components/headless/Calendar';
import { useAutoPlacement } from '@ui/hooks/useAutoPlacement';
import useClickOutside from '@ui/hooks/useClickOutside';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { formatToYYYYMMDD } from '@ui/utils/date';
import { FaRegCalendar } from 'react-icons/fa';

interface CalendarInputProps {
  value: DateRange;
  setValue: (value: DateRange) => void;
  size?: 'm' | 's';
}

export default function CalendarInput({ value, setValue, size = 'm' }: CalendarInputProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const { positionClass } = useAutoPlacement({
    triggerRef: containerRef,
    dropdownRef: calendarRef,
    isOpen,
  });

  const grey500 = useColorByTheme('grey-500');
  const sizeStyle = {
    m: { button: 'h-12 px-4 py-3' },
    s: { button: 'h-9 px-3 py-1.5' },
  };

  useClickOutside({ ref: calendarRef, onClick: () => setIsOpen(false) });

  return (
    <div className='relative flex flex-1' ref={containerRef}>
      <button
        className={`flex flex-1 cursor-pointer items-center justify-between gap-1 rounded-sm border border-grey-400 bg-grey-0 ${sizeStyle[size].button}`}
        onClick={() => setIsOpen(true)}
      >
        <p>
          {formatToYYYYMMDD(value?.from)} ~ {formatToYYYYMMDD(value?.to)}
        </p>
        <FaRegCalendar size={20} color={grey500} />
      </button>
      {isOpen && (
        <div className={`absolute z-10 ${positionClass}`} ref={calendarRef}>
          <Calendar value={value} setValue={setValue} onClickApply={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
