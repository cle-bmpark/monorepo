import { ChangeEventHandler, ComponentPropsWithoutRef, useRef } from 'react';

type NativeTextareaProps = ComponentPropsWithoutRef<'textarea'>;
interface LineTextFieldProps extends Omit<NativeTextareaProps, 'disabled' | 'className' | 'style'> {
  isDisabled?: boolean;
  style?: 'default' | 'line' | 'gray' | 'blue';
}

export default function LineTextField({
  isDisabled = false,
  style = 'default',
  ...rest
}: LineTextFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const variantStyle = {
    default: {
      wrapper: 'bg-grey-0',
      textarea: 'placeholder:text-grey-500 text-grey-950',
    },
    line: {
      wrapper: 'border-b-1 border-grey-950 bg-grey-0 ',
      textarea: 'placeholder:text-grey-500 text-grey-950',
    },
    gray: {
      wrapper: 'bg-grey-100',
      textarea: 'placeholder:text-grey-500 text-grey-950',
    },
    blue: {
      wrapper: 'border-b-1 border-blue-500 bg-grey-0',
      textarea: 'placeholder:text-grey-500 text-blue-500',
    },
    disabled: {
      wrapper: 'bg-grey-100',
      textarea: 'cursor-not-allowed placeholder:text-grey-300 text-grey-300',
    },
  };
  const variantKey = isDisabled ? 'disabled' : style;

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    rest.onChange?.(event);

    if (textareaRef.current) {
      // 사용자 입력에 따라 textarea 높이가 변경됩니다.
      const MAX_HEIGHT = 200;
      const textarea = textareaRef.current;

      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight < MAX_HEIGHT ? textarea.scrollHeight : MAX_HEIGHT}px`;
    }
  };

  return (
    <div
      className={`flex items-center justify-center px-4 py-3 ${variantStyle[variantKey].wrapper}`}
    >
      <textarea
        className={`flex flex-1 resize-none caret-blue-500 outline-none ${variantStyle[variantKey].textarea}`}
        onChange={handleChange}
        disabled={isDisabled}
        rows={1}
        ref={textareaRef}
        {...rest}
      />
    </div>
  );
}
