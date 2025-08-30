import { ChangeEventHandler, ComponentPropsWithoutRef, useRef } from 'react';

import LoadingIcon from '@ui/components/svg/LoadingIcon';

type NativeTextareaProps = ComponentPropsWithoutRef<'textarea'>;
interface TextFieldProps
  extends Omit<NativeTextareaProps, 'disabled' | 'className' | 'ref' | 'rows'> {
  isLoading?: boolean; // 로딩 상태 여부
  isDisabled?: boolean; // 입력 비활성화 여부
  isError?: boolean; // 에러 상태 여부
  errorMessage?: string; // 에러 메시지 (에러 상태일 때만 표시)
  size?: 'm' | 's'; // 폰트 사이즈
}

export default function TextField({
  isLoading = false,
  isDisabled = false,
  isError = false,
  errorMessage,
  size = 'm',
  ...rest
}: TextFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const variantStyle = {
    default: {
      wrapper: 'bg-grey-0 border-b-grey-200',
      textarea: '',
    },
    disabled: {
      wrapper: 'bg-grey-100 border-b-grey-200',
      textarea: 'cursor-not-allowed text-grey-300',
    },
    error: {
      wrapper: 'border-primary-500 bg-primary-50',
      textarea: '',
    },
  };
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : 'default';

  const fontStyle = {
    m: 'text-14 leading-20',
    s: 'text-12 leading-20', // leading-16 일 경우, scrollbar 가 발생하여 20으로 통일시킵니다.
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    rest.onChange?.(event);

    if (textareaRef.current) {
      // 사용자 입력에 따라 textarea 높이가 변경됩니다.
      const MAX_HEIGHT = 200;
      const textarea = textareaRef.current;

      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_HEIGHT)}px`;
    }
  };

  return (
    <div className='flex flex-1 flex-col gap-1'>
      <div
        className={`flex min-h-11 items-center justify-center border-b-1 px-4 py-3 ${variantStyle[variantKey].wrapper}`}
      >
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <textarea
            className={`flex flex-1 resize-none caret-blue-500 outline-none placeholder:text-grey-500 ${variantStyle[variantKey].textarea} ${fontStyle[size]}`}
            onChange={handleChange}
            disabled={isDisabled}
            rows={1}
            ref={textareaRef}
            {...rest}
          />
        )}
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
