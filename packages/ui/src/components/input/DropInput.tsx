'use client';

import { useRef, useState } from 'react';

import { useAutoPlacement } from '@ui/hooks/useAutoPlacement';
import useClickOutside from '@ui/hooks/useClickOutside';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa6';

interface DropInputProps<T> {
  value: T; // 선택된 값
  valueList: T[]; // 선택지 목록
  onClick: (value: T) => void; // 선택된 값 변경 핸들러
  isDisabled?: boolean; // 선택 비활성화 여부
  isError?: boolean; // 에러 상태 여부
  errorMessage?: string; // 에러 메시지 (에러 상태일 때만 표시)
  placeholder?: string; // 플레이스홀더 텍스트
  style?: 'default' | 'blue' | 'ghost'; // 색상 스타일
  size?: 'm' | 's';
}

export default function DropInput<T>({
  value,
  valueList,
  onClick,
  isDisabled = false,
  isError = false,
  errorMessage,
  placeholder = 'Text',
  style = 'default',
  size = 'm',
}: DropInputProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { positionClass } = useAutoPlacement({
    triggerRef: containerRef,
    dropdownRef,
    isOpen,
  });

  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');
  const grey900 = useColorByTheme('grey-900');

  const variantStyle = {
    default: {
      wrapper: isOpen
        ? 'cursor-pointer border-grey-400 bg-grey-0'
        : 'cursor-pointer border-grey-200 bg-grey-50',
      input: 'cursor-pointer placeholder:text-grey-500 text-grey-950',
      iconColor: isOpen ? grey900 : grey500,
      button: 'text-primary-500 hover:text-primary-600',
    },
    disabled: {
      wrapper: 'cursor-not-allowed border-grey-100 bg-grey-100',
      input: 'cursor-not-allowed placeholder:text-grey-300 text-grey-300',
      iconColor: grey300,
      button: 'text-primary-500 hover:text-primary-600',
    },
    error: {
      wrapper: 'cursor-pointer border-primary-500 bg-primary-50',
      input: 'cursor-pointer placeholder:text-grey-500 text-grey-950',
      iconColor: isOpen ? grey900 : grey500,
      button: 'text-primary-500 hover:text-primary-600',
    },
    blue: {
      wrapper: isOpen
        ? 'cursor-pointer border-grey-400 bg-grey-0'
        : 'cursor-pointer border-grey-200 bg-grey-50',
      input: 'cursor-pointer placeholder:text-blue-300 text-blue-500',
      iconColor: isOpen ? grey900 : grey500,
      button: 'text-blue-500',
    },
    ghost: {
      wrapper: isOpen
        ? 'cursor-pointer border-grey-400 bg-grey-0'
        : 'cursor-pointer border-grey-100 bg-grey-100',
      input: 'cursor-pointer placeholder:text-grey-500 text-grey-700',
      iconColor: isOpen ? grey300 : grey300,
      button: 'text-primary-500 hover:text-primary-600',
    },
  };
  const sizeStyle = {
    m: { inputWrapper: 'h-12 px-4 py-3', dropButton: 'px-4 py-2' },
    s: { inputWrapper: 'h-9 px-3 py-1.5', dropButton: 'px-3 py-1' },
  };
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : style;

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
    <div className='relative flex flex-1 flex-col gap-1' ref={containerRef}>
      <div
        className={`flex items-center rounded-sm border-1 ${variantStyle[variantKey].wrapper} ${sizeStyle[size].inputWrapper}`}
      >
        <input
          className={`flex w-full min-w-0 flex-1 text-16 outline-0 ${variantStyle[variantKey].input}`}
          placeholder={placeholder}
          value={String(value)}
          onClick={handleClickInput}
          disabled={isDisabled}
          readOnly
        />
        {isOpen ? (
          <CgChevronUp size={20} onClick={handleClickInput} />
        ) : (
          <CgChevronDown size={20} onClick={handleClickInput} />
        )}
      </div>

      {errorMessage ? (
        <p className='ml-2 animate-fade-in text-14 leading-20 break-words text-primary-600'>
          {errorMessage}
        </p>
      ) : (
        <div className='h-5' />
      )}

      {isOpen && (
        <div
          className={`absolute left-0 z-10 max-h-48 w-[100%] overflow-auto rounded-sm border border-grey-300 bg-grey-0 p-1 shadow-strong ${positionClass}`}
          ref={dropdownRef}
        >
          <ul className='flex flex-1 animate-fade-in flex-col gap-1'>
            {valueList.map((item) => (
              <button
                key={String(item)}
                className={`flex flex-1 cursor-pointer items-center justify-between gap-1 hover:bg-grey-950/4 ${item === value && variantStyle[variantKey].button} ${sizeStyle[size].dropButton}`}
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
