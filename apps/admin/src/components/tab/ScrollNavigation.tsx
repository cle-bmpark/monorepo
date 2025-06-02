export interface ScrollNavigationType<T extends string> {
  key: number;
  value: T;
}
interface ScrollNavigationProps<T extends string> {
  value: ScrollNavigationType<T>;
  valueList: ScrollNavigationType<T>[];
  onClick?: (value: ScrollNavigationType<T>) => void;
  align?: 'left' | 'right';
}

export default function ScrollNavigation<T extends string>({
  value,
  valueList,
  onClick,
  align = 'left',
}: ScrollNavigationProps<T>) {
  const variantStyle = {
    check: 'text-grey-950 underline',
    uncheck: 'text-grey-500',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <ul className='flex flex-col gap-2'>
      {Object.values(valueList).map((item, index) => (
        <button
          className={`hover:bg-grey-950/4 cursor-pointer px-1 py-0.5 ${variantStyle[value.key === item.key ? 'check' : 'uncheck']} ${
            variantStyle[align === 'right' ? 'right' : 'left']
          }`}
          key={`ScrollNavigation_${item.key}`}
          onClick={() => onClick && onClick(item)}
        >
          {index}.&nbsp;{item.value}
        </button>
      ))}
    </ul>
  );
}
