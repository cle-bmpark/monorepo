'use client';

import React, { ComponentPropsWithoutRef, JSX, useState } from 'react';

import { useColorByTheme } from '@ui/hooks/useColorByTheme';

type NativeInputProps = ComponentPropsWithoutRef<'input'>;
type UiVariant = 'default' | 'blue' | 'ghost';
type UiSize = 'm' | 's';

interface BackIconInputProps extends Omit<NativeInputProps, 'size' | 'style' | 'disabled'> {
  icon: JSX.Element;
  errorMessage?: string;
  style?: UiVariant;
  size?: UiSize;
  isDisabled?: boolean;
  isError?: boolean;
}

export default function BackIconInput({
  icon,
  errorMessage,
  style = 'default',
  size = 'm',
  isDisabled = false,
  isError = false,
  placeholder = 'Text',
  ...rest
}: BackIconInputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');

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
      input: 'placeholder:text-grey-500 text-grey-950',
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

  const getIconStyle = () => {
    // 상태에 따라 아이콘 색상 변경
    const baseStyle = {
      width: 20,
      height: 20,
      color: grey500,
      margin: size === 'm' ? 14 : 8,
    };

    if (isDisabled) {
      return {
        width: 20,
        height: 20,
        color: grey300,
        margin: size === 'm' ? 14 : 8,
      };
    }

    return baseStyle;
  };

  const styledIcon = React.cloneElement(icon, {
    style: getIconStyle(),
    className: `${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
  });

  return (
    <div className='flex flex-1 flex-col gap-1'>
      <div className='flex flex-1 items-center'>
        <div
          className={`flex flex-1 items-center gap-1 rounded-sm border-1 ${variantStyle[variantKey].wrapper} ${sizeStyle[size]}`}
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
        {styledIcon}
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
