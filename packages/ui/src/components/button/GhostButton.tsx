import { ComponentPropsWithoutRef } from 'react';

import { CgChevronRight } from 'react-icons/cg';

type NativeButtonProps = ComponentPropsWithoutRef<'button'>;
interface GhostButtonProps
  extends Omit<NativeButtonProps, 'style' | 'value' | 'className' | 'disabled'> {
  value: string;
  isDisabled?: boolean;
  size?: 'm' | 's';
  style?: 'default' | 'primary';
  iconPosition?: 'none' | 'right' | 'left';
}

export default function GhostButton({
  value,
  isDisabled = false,
  size = 'm',
  style = 'default',
  iconPosition = 'none',
  ...rest
}: GhostButtonProps) {
  const variantStyle = {
    default: isDisabled
      ? 'cursor-not-allowed text-grey-300'
      : 'cursor-pointer hover:bg-grey-950/4 text-grey-700 hover:text-grey-800',

    primary: isDisabled
      ? 'cursor-not-allowed text-primary-300'
      : 'cursor-pointer hover:bg-grey-950/4 text-primary-500 hover:text-primary-600',
  };
  const sizeStyle = {
    m: { text: 'text-16 leading-24', icon: 20 },
    s: { text: 'text-14 leading-20', icon: 16 },
  };

  return (
    <button
      className={`flex w-fit items-center justify-center gap-1 py-0.5 pr-0.5 ${variantStyle[style]}`}
      disabled={isDisabled}
      {...rest}
    >
      {iconPosition === 'left' && <CgChevronRight size={sizeStyle[size].icon} />}
      <p className={`whitespace-nowrap ${sizeStyle[size].text}`}>{value}</p>
      {iconPosition === 'right' && <CgChevronRight size={sizeStyle[size].icon} />}
    </button>
  );
}
