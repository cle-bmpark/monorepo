import { getObjectEntries } from '@/utils/object';
import React, { ReactNode } from 'react';

interface ObjectTableProps<T extends object> {
  title?: string;
  data: T;
  renderKey: (key: keyof T) => ReactNode;
  renderValue: (key: keyof T, value: T[keyof T]) => ReactNode;
  rowCount?: number;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export default function ObjectTable<T extends object>({
  title,
  data,
  renderKey,
  renderValue,
  rowCount = 4,
}: ObjectTableProps<T>) {
  const arrayData = getObjectEntries(data);
  const chunkedData = chunk(arrayData, rowCount);

  return (
    <table className='w-full'>
      {title && (
        <caption className='text-16 leading-24 font-700 text-grey-800 mb-2 text-left'>
          {title}
        </caption>
      )}

      <tbody className='border-grey-300 border'>
        {chunkedData.map((rowItems, rowIndex) => {
          const fillCount: number = rowCount - rowItems.length;

          return (
            <tr
              key={`object_table_row_${rowItems[0]?.toString()}`}
              className={` ${rowIndex !== chunkedData.length - 1 && 'border-grey-200 border-b'}`}
            >
              {rowItems.map(([key, value], index) => (
                <React.Fragment key={key.toString()}>
                  <td className='border-grey-200 text-14 bg-grey-50 leading-20 font-400 items-center whitespace-pre-line break-keep border-r px-3 py-2.5'>
                    {renderKey(key)}
                  </td>
                  <td
                    className={`items-center px-3 py-2.5 ${(index + 1) % rowCount !== 0 && 'border-grey-200 border-r'}`}
                  >
                    {renderValue(key, value)}
                  </td>
                </React.Fragment>
              ))}

              {/* 부족한 셀 채우기 */}
              {Array.from({ length: fillCount }).map((_, index) => (
                <React.Fragment key={`empty_${index}`}>
                  <td className='px-3 py-2.5' />
                  <td className='px-3 py-2.5' />
                </React.Fragment>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
