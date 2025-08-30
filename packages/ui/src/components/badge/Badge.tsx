import { ComponentPropsWithoutRef } from 'react';

export const BadgeColors = [
  'yellow',
  'blue',
  'green',
  'purple',
  'grey',
  'red',
  'neo-green',
] as const;
export type BadgeColor = (typeof BadgeColors)[number];

type NativeButtonProps = ComponentPropsWithoutRef<'button'>;
interface BadgeProps extends Omit<NativeButtonProps, 'value' | 'color' | 'size' | 'className'> {
  value: string;
  color?: BadgeColor;
  size?: 'l' | 'm' | 's';
}

export default function Badge({ value, color = 'grey', size = 'm', ...rest }: BadgeProps) {
  const variantStyle: Record<BadgeColor, string> = {
    yellow: 'border-yellow-500 bg-yellow-100 text-yellow-950',
    blue: 'border-sky-500 bg-sky-100 text-sky-950',
    green: 'border-green-500 bg-green-100 text-green-950',
    purple: 'border-purple-500 bg-purple-100 text-purple-950',
    grey: 'border-grey-500 bg-grey-50 text-grey-700',
    red: 'border-primary-500 bg-primary-200 text-primary-950',
    'neo-green': 'border-neo-green-500 bg-neo-green-100 text-neo-green-950',
  };

  const sizeStyle = {
    s: 'px-2 py-1 text-12 leading-16',
    m: 'px-3 py-1 text-14 leading-16',
    l: 'px-3 py-1 text-16 leading-24',
  };

  return (
    <button
      className={`text-medium flex w-fit items-center gap-2 rounded-lg border-1 ${variantStyle[color]} ${sizeStyle[size]} ${rest.onClick && 'cursor-pointer'}`}
      {...rest}
    >
      <p className='whitespace-nowrap'>{value}</p>
    </button>
  );
}
