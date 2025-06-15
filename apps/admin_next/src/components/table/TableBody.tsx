import { getObjectKeys } from '@/utils/object';
import { ReactNode } from 'react';

interface TableBodyProps<T extends object> {
  data: T[];
  renderCell: (row: T, key: keyof T) => ReactNode;
}

export default function TableBody<T extends object>({ data, renderCell }: TableBodyProps<T>) {
  const keys = getObjectKeys(data[0] ?? {});

  return (
    <tbody className='leading-24'>
      {data.map((row, index) => (
        <tr
          className={`border-grey-200 ${index !== data.length - 1 && 'border-b'}`}
          key={`table_row_${index}`}
        >
          {keys.map(
            (key) =>
              renderCell(row, key) && (
                <td
                  key={`${String(key)}_${String(row[key])}`}
                  className='items-center break-all px-3 py-2.5 align-top'
                >
                  {renderCell(row, key)}
                </td>
              ),
          )}
        </tr>
      ))}
    </tbody>
  );
}
