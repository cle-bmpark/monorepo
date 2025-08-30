'use client';

import { ChangeEvent, ComponentPropsWithoutRef, useRef, useState } from 'react';

import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { PiFolder } from 'react-icons/pi';

type NativeInputProps = ComponentPropsWithoutRef<'input'>;
interface SelectFileInputProps
  extends Omit<
    NativeInputProps,
    'size' | 'style' | 'className' | 'disabled' | 'value' | 'onClick'
  > {
  errorMessage?: string;
  handleOpenFile?: () => void;
  style?: 'default' | 'blue' | 'ghost';
  size?: 'm' | 's';
  isDisabled?: boolean;
  isError?: boolean;
}

export default function SelectFileInput({
  isDisabled = false,
  isError = false,
  errorMessage,
  handleOpenFile,
  style = 'default',
  size = 'm',
  ...rest
}: SelectFileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');

  const variantStyle = {
    default: {
      input: 'border-grey-200 bg-grey-50 placeholder:text-grey-500 text-grey-950',
    },
    disabled: {
      input:
        'border-grey-100 bg-grey-100 cursor-not-allowed placeholder:text-grey-300 text-grey-700',
    },
    error: {
      input: 'border-primary-500 bg-primary-50 placeholder:text-grey-500 text-grey-950',
    },
    blue: {
      input: 'border-grey-200 bg-grey-50 placeholder:text-blue-300 text-blue-500',
    },
    ghost: {
      input: 'border-grey-100 bg-grey-100 placeholder:text-grey-500 text-grey-700',
    },
  };
  const sizeStyle = {
    m: 'h-12 px-4 py-3',
    s: 'h-9 px-3 py-1.5',
  };
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : style;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;

    // 선택한 파일명 업데이트
    const files = e.target.files;
    if (files && files.length > 0 && files[0]) {
      const fileNames =
        files.length === 1 ? files[0].name : `${files[0].name} 외 ${files.length - 1}개`;
      setFileName(fileNames);
    } else {
      setFileName('');
    }

    if (handleOpenFile) handleOpenFile();
    return;
  };

  const openFileSelectDialog = () => {
    if (!isDisabled) fileInputRef.current?.click();
  };

  return (
    <div className='flex flex-1 flex-col gap-1'>
      <div className={`flex items-center`}>
        <input
          className='hidden'
          type='file'
          multiple={rest.multiple}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={rest.accept}
        />
        <input
          className={`flex flex-1 rounded-sm border-1 text-16 caret-blue-500 outline-0 ${sizeStyle[size]} ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${variantStyle[variantKey].input}`}
          value={fileName}
          readOnly
          disabled={isDisabled}
          onClick={openFileSelectDialog}
          placeholder={rest.placeholder ?? 'Upload file'}
          {...rest}
        />
        <PiFolder
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          color={isDisabled ? grey300 : grey500}
          size={20}
          className={`${size === 'm' ? 'm-3.5' : 'm-2'}`}
          onClick={openFileSelectDialog}
        />
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
