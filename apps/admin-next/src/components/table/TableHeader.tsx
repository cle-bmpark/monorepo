import { ReactNode } from 'react';

import { getObjectKeys } from '@/utils/object';

interface TableHeaderProps<T extends object> {
  data: T[];
  renderHeader: (key: keyof T) => ReactNode;
}

export default function TableHeader<T extends object>({ data, renderHeader }: TableHeaderProps<T>) {
  return (
    <thead className='bg-grey-50 border-grey-300 z-5 sticky top-0 border-b'>
      <tr>
        {getObjectKeys(data[0] ?? {}).map(
          (key) =>
            renderHeader(key) && (
              <th
                key={`table_header_${String(key)}`}
                className='text-14 leading-20 text-grey-700 font-400 gap-1 whitespace-pre-line break-keep px-3 py-2.5'
              >
                {renderHeader(key)}
              </th>
            ),
        )}
      </tr>
    </thead>
  );
}
