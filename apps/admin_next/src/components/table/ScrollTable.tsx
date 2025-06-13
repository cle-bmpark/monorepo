import Filter, { filterBodyType } from '@/components/table/Filter';
import TableBody from '@/components/table/TableBody';
import TableHeader from '@/components/table/TableHeader';
import { ReactNode } from 'react';

interface ScrollTableProps<T extends object> {
  title: string;
  data: T[];
  filterBody?: () => filterBodyType[];
  refetchData: (value?: string) => void;
  renderHeader: (key: keyof T) => ReactNode;
  renderCell: (row: T, key: keyof T) => ReactNode;
}

export default function ScrollTable<T extends object>({
  title,
  data,
  filterBody,
  refetchData,
  renderHeader,
  renderCell,
}: ScrollTableProps<T>) {
  if (data.length < 1)
    return (
      <div className='mt-8 flex flex-1 items-center justify-center'>
        <p>데이터가 없습니다.</p>
      </div>
    );

  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap items-center justify-between text-left'>
        <h3 className='text-grey-800'>{title}</h3>
        <div className='flex gap-2'>
          {filterBody && <Filter filterBody={filterBody} refetchData={refetchData} />}
        </div>
      </div>

      <div className='border-grey-300 max-h-60 overflow-auto border'>
        <table className='w-full px-1 text-left'>
          <TableHeader data={data} renderHeader={renderHeader} />
          <TableBody data={data} renderCell={renderCell} />
        </table>
      </div>
    </div>
  );
}
