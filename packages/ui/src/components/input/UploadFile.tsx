'use client';

import React, { ComponentPropsWithoutRef, useState } from 'react';

import LoadingIcon from '@ui/components/svg/LoadingIcon';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { IoMdClose } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { LuUpload } from 'react-icons/lu';

type NativeInputProps = ComponentPropsWithoutRef<'input'>;
interface UploadFileProps
  extends Omit<
    NativeInputProps,
    'size' | 'style' | 'className' | 'disabled' | 'value' | 'placeholder' | 'onClick'
  > {
  errorMessage?: string;
  handleOpenFile?: () => void;
  clickUpload?: () => void;
  clickDelete?: () => void;
  clickCancel?: () => void;
  style?: 'default' | 'blue' | 'ghost';
  size?: 'm' | 's';
  isUploading?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
}

export default function UploadFile({
  isUploading = false,
  isDisabled = false,
  isError = false,
  errorMessage,
  handleOpenFile,
  clickUpload,
  clickDelete,
  clickCancel,
  style = 'default',
  size = 'm',
  ...rest
}: UploadFileProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

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
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : style;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleUpload = () => {
    if (isDisabled) return;

    if (clickUpload) clickUpload();
    return;
  };

  const handleDelete = () => {
    if (isDisabled) return;

    if (clickDelete) clickDelete();
    return;
  };

  const handleCancel = () => {
    if (clickCancel) clickCancel();
    return;
  };

  return (
    <div className='flex flex-1 flex-col gap-1'>
      {!isUploading ? (
        <div
          className={`flex items-center gap-1 rounded-sm border-1 ${variantStyle[variantKey].wrapper} ${sizeStyle[size]}`}
        >
          <input
            className='hidden'
            type='file'
            accept='image/*' // 변경 필요
            multiple={true} // 변경 필요
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <input
            className={`flex w-full flex-1 text-16 caret-blue-500 outline-0 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${variantStyle[variantKey].input}`}
            value={fileName}
            placeholder='Upload file'
            readOnly
            disabled={isDisabled}
            onClick={() => {
              if (!isDisabled) fileInputRef.current?.click();
            }}
            {...rest}
          />
          {fileName.length > 0 ? (
            <IoTrashOutline
              cursor={isDisabled ? 'not-allowed' : 'pointer'}
              color={grey500}
              size={20}
              onClick={handleDelete}
            />
          ) : (
            <LuUpload
              cursor={isDisabled ? 'not-allowed' : 'pointer'}
              color={isDisabled ? grey300 : grey500}
              size={20}
              onClick={handleUpload}
            />
          )}
        </div>
      ) : (
        <div
          className={`flex items-center gap-1 rounded-sm border-1 border-grey-400 bg-grey-0 ${sizeStyle[size]}`}
        >
          <LoadingIcon />
          <p className='flex flex-1 text-16 text-grey-950 caret-blue-500 outline-0'>Uploading...</p>
          <IoMdClose cursor='pointer' color={grey500} size={20} onClick={handleCancel} />
        </div>
      )}
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
