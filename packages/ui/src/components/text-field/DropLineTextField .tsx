import { useRef, useState } from 'react';

import { useAutoPlacement } from '@ui/hooks/useAutoPlacement';
import useClickOutside from '@ui/hooks/useClickOutside';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa6';

interface DropLineTextFieldProps<T> {
  value: T; // 선택된 값
  valueList: T[]; // 선택지 목록
  onClick: (value: T) => void; // 선택된 값 변경 핸들러
  isDisabled?: boolean;
  placeholder?: string;
  style?: 'default' | 'line' | 'gray' | 'blue';
}

export default function DropLineTextField<T>({
  value,
  valueList,
  onClick,
  isDisabled = false,
  placeholder = 'Text',
  style = 'default',
}: DropLineTextFieldProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { positionClass } = useAutoPlacement({
    triggerRef: containerRef,
    dropdownRef,
    isOpen,
  });

  const blue500 = useColorByTheme('blue-500');

  const variantStyle = {
    default: {
      wrapper: 'cursor-pointer bg-grey-0',
      textarea: 'cursor-pointer placeholder:text-grey-500 text-grey-950',
      button: 'text-primary-500 hover:text-primary-600',
    },
    line: {
      wrapper: 'cursor-pointer border-b-1 border-grey-950 bg-grey-0 ',
      textarea: 'cursor-pointer placeholder:text-grey-500 text-grey-950',
      button: 'text-primary-500 hover:text-primary-600',
    },
    gray: {
      wrapper: 'cursor-pointer bg-grey-100',
      textarea: 'cursor-pointer placeholder:text-grey-500 text-grey-950',
      button: 'text-primary-500 hover:text-primary-600',
    },
    blue: {
      wrapper: 'cursor-pointer border-b-1 border-blue-500 bg-grey-0',
      textarea: 'cursor-pointer placeholder:text-grey-500 text-blue-500',
      button: 'text-blue-500',
      iconColor: blue500,
    },
    disabled: {
      wrapper: 'cursor-not-allowed bg-grey-100',
      textarea: 'cursor-not-allowed placeholder:text-grey-300 text-grey-300',
      button: 'text-primary-500 hover:text-primary-600',
    },
  };
  const variantKey = isDisabled ? 'disabled' : style;

  const iconColor = {
    open: useColorByTheme('grey-900'),
    closed: useColorByTheme('grey-500'),
  };
  const iconKey = isOpen ? 'open' : 'closed';

  const handleClickInput = () => {
    if (isDisabled) return;
    setIsOpen(!isOpen);
  };
  const handleClickButton = (item: T) => {
    onClick(item);
    setIsOpen(false);
  };

  useClickOutside({ ref: dropdownRef, onClick: () => setIsOpen(false) });

  return (
    <div className='relative flex flex-col' ref={containerRef}>
      <div
        className={`flex items-center justify-center gap-1 px-4 py-3 ${variantStyle[variantKey].wrapper}`}
      >
        <textarea
          className={`flex flex-1 resize-none outline-none ${variantStyle[variantKey].textarea}`}
          value={String(value)}
          placeholder={placeholder}
          disabled={isDisabled}
          rows={1}
          readOnly
          onClick={handleClickInput}
        />
        {isOpen ? (
          <CgChevronUp size={20} onClick={handleClickInput} color={iconColor[iconKey]} />
        ) : (
          <CgChevronDown size={20} onClick={handleClickInput} color={iconColor[iconKey]} />
        )}
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute left-0 z-10 max-h-48 w-[100%] overflow-auto rounded-sm border-grey-300 bg-grey-0 p-1 shadow-strong ${positionClass}`}
        >
          <ul className='flex animate-fade-in flex-col gap-1'>
            {valueList.map((item) => (
              <button
                key={String(item)}
                className={`flex flex-1 cursor-pointer items-center justify-between gap-1 px-4 py-2 hover:bg-grey-950/4 ${item === value && variantStyle[variantKey].button}`}
                onClick={() => {
                  handleClickButton(item);
                }}
              >
                <p>{String(item)}</p>
                {item === value && <FaCheck size={16} />}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
