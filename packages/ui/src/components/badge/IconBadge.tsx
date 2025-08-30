import { BadgeColor } from '@ui/components/badge/Badge';
import { ComponentPropsWithoutRef, JSX } from 'react';

type uiSize = 'l' | 'm' | 's';
type NativeButtonProps = ComponentPropsWithoutRef<'button'>;
interface IconBadgeProps extends Omit<NativeButtonProps, 'className'> {
  value: string;
  icon: JSX.Element;
  color?: BadgeColor;
  size?: uiSize;
}

export default function IconBadge({
  value,
  icon,
  color = 'grey',
  size = 'm',
  ...rest
}: IconBadgeProps) {
  const variantStyle: Record<BadgeColor, { button: string }> = {
    yellow: {
      button: 'border-yellow-500 bg-yellow-100 text-yellow-950',
    },
    blue: {
      button: 'border-sky-500 bg-sky-100 text-sky-950',
    },
    green: {
      button: 'border-green-500 bg-green-100 text-green-950',
    },
    purple: {
      button: 'border-purple-500 bg-purple-100 text-purple-950',
    },
    grey: {
      button: 'border-grey-500 bg-grey-50 text-grey-700',
    },
    red: {
      button: 'border-primary-500 bg-primary-200 text-primary-950',
    },
    'neo-green': {
      button: 'border-neo-green-500 bg-neo-green-100 text-neo-green-950',
    },
  };

  const sizeStyle: Record<uiSize, { button: string }> = {
    s: { button: 'px-2 py-1 text-12 leading-16' },
    m: { button: 'px-3 py-1 text-14 leading-16' },
    l: { button: 'px-3 py-1 text-16 leading-24' },
  };

  return (
    <button
      className={`text-medium flex w-fit cursor-pointer items-center gap-2 rounded-lg border-1 ${variantStyle[color].button} ${sizeStyle[size].button}`}
      {...rest}
    >
      {icon}
      <p> {value}</p>
    </button>
  );
}
