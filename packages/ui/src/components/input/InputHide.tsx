'use client';

import { ComponentPropsWithoutRef, useState } from 'react';

type NativeInputProps = ComponentPropsWithoutRef<'input'>;
type UiVariant = 'default' | 'primary';
type UiSize = 'm' | 's';

interface InputHideProps extends Omit<NativeInputProps, 'size' | 'style'> {
  size?: UiSize;
  style?: UiVariant;
}

export default function InputHide({
  size = 'm',
  style = 'default',
  placeholder = 'Text',
  ...rest
}: InputHideProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const variantStyle = {
    default: 'bg-grey-0, text-grey-950',
    focus: `bg-grey-950/4 ${style === 'primary' ? 'text-red-500' : 'text-grey-950'}`,
    primary: 'bg-grey-0 text-red-500',
  };
  const sizeStyle = {
    m: 'h-12 px-4 py-3',
    s: 'h-9 px-3 py-1.5',
  };
  const variantKey = isFocus ? 'focus' : style;

  return (
    <input
      className={`flex w-full rounded-sm border-1 border-none text-16 caret-blue-500 outline-0 placeholder:text-grey-500 ${variantStyle[variantKey]} ${sizeStyle[size]}`}
      placeholder={placeholder}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      {...rest}
    />
  );
}
