'use client';

import { ComponentPropsWithoutRef, useState } from 'react';

type NativeInputProps = ComponentPropsWithoutRef<'input'>;
interface InputProps
  extends Omit<
    NativeInputProps,
    'size' | 'style' | 'className' | 'disabled' | 'onFocus' | 'onBlur'
  > {
  errorMessage?: string; // 에러 메시지 (에러 상태일 때만 표시)
  style?: 'default' | 'blue' | 'ghost'; // 색상 스타일
  size?: 'm' | 's'; // 사이즈
  isDisabled?: boolean; // 입력 비활성화 여부
  isError?: boolean; // 에러 상태 여부
}

export default function Input({
  errorMessage,
  isDisabled = false,
  isError = false,
  style = 'default',
  size = 'm',
  placeholder = 'Text',
  ...rest
}: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const variantStyle = {
    default: {
      wrapper: 'border-grey-200 bg-grey-50',
      input: 'placeholder:text-grey-500 text-grey-950',
    },
    disabled: {
      wrapper: 'border-grey-100 bg-grey-100',
      input: 'cursor-not-allowed placeholder:text-grey-300 text-grey-700',
    },
    error: {
      wrapper: 'border-primary-500 bg-primary-50',
      input: 'placeholder:text-grey-500 text-grey-950',
    },
    focus: {
      wrapper: 'border-grey-400 bg-grey-0',
      input: style === 'blue' ? ' text-blue-500' : ' text-grey-950',
    },
    blue: {
      wrapper: 'border-grey-200 bg-grey-50',
      input: 'placeholder:text-blue-300 text-blue-500',
    },
    ghost: {
      wrapper: 'border-grey-100 bg-grey-100',
      input: 'placeholder:text-grey-500 text-grey-700',
    },
  };
  const sizeStyle = {
    m: 'h-12 px-4 py-3',
    s: 'h-9 px-3 py-1.5',
  };
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : isFocus ? 'focus' : style;

  return (
    <div className='flex flex-col gap-1'>
      <div
        className={`flex items-center gap-1 rounded-sm border-1 ${variantStyle[variantKey].wrapper} ${sizeStyle[size]}`}
      >
        <input
          className={`flex w-full flex-1 text-16 caret-blue-500 outline-0 ${variantStyle[variantKey].input}`}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...rest}
        />
      </div>
      {errorMessage && isError ? (
        <p className='ml-2 animate-fade-in text-14 leading-20 break-words text-primary-600'>
          {errorMessage}
        </p>
      ) : (
        <div className='h-5' />
      )}
    </div>
  );
}
