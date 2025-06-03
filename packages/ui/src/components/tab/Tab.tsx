export interface TabType<T extends string> {
  key: number;
  value: T;
}

interface TabProps<T extends string> {
  value: TabType<T>;
  valueList: TabType<T>[];
  onClick?: (value: TabType<T>) => void;
}

export default function Tab<T extends string>({ value, valueList, onClick }: TabProps<T>) {
  return (
    <div className='flex-fit flex items-center justify-between gap-4'>
      {valueList?.map((item) => (
        <button
          key={`Tab_${item.key}`}
          className='hover:bg-grey-950/4 cursor-pointer px-3 py-2'
          onClick={() => onClick && onClick(item)}
        >
          <h3
            className={`border-b-2 pb-1.5 ${
              value.key === item.key ? 'border-primary-500' : 'text-grey-500 border-transparent'
            }`}
          >
            {item.value}
          </h3>
        </button>
      ))}
    </div>
  );
}
