'use client';

import { ComponentPropsWithoutRef, useState } from 'react';

import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

type NativeInputProps = ComponentPropsWithoutRef<'input'>;
type UiVariant = 'default' | 'blue' | 'ghost';
type UiSize = 'm' | 's';

interface PasswordInputProps extends Omit<NativeInputProps, 'size' | 'style' | 'disabled'> {
  errorMessage?: string;
  style?: UiVariant;
  size?: UiSize;
  isDisabled?: boolean;
  isError?: boolean;
}

export default function PasswordInput({
  errorMessage,
  style = 'default',
  size = 'm',
  isDisabled = false,
  isError = false,
  placeholder = 'Text',
  ...rest
}: PasswordInputProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const grey300 = useColorByTheme('grey-300');
  const grey900 = useColorByTheme('grey-900');

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
    <div className='flex flex-1 flex-col gap-1'>
      <div
        className={`flex items-center gap-1 rounded-sm border-1 ${variantStyle[variantKey].wrapper} ${sizeStyle[size]}`}
      >
        <input
          className={`flex w-full flex-1 text-16 caret-blue-500 outline-0 ${variantStyle[variantKey].input}`}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          type={isShow ? 'text' : 'password'}
          {...rest}
        />
        {isShow ? (
          <IoMdEye
            size={20}
            onClick={() => {
              if (isDisabled) return;
              setIsShow(false);
            }}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            color={grey900}
          />
        ) : (
          <IoMdEyeOff
            size={20}
            onClick={() => {
              if (isDisabled) return;
              setIsShow(true);
            }}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            color={grey300}
          />
        )}
      </div>
      {errorMessage ? (
        <p className='ml-2 animate-fade-in text-14 leading-20 break-words text-primary-600'>
          {errorMessage}
        </p>
      ) : (
        <div className='h-5' />
      )}
    </div>
  );
}
