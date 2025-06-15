import Filter, { filterBodyType } from '@/components/table/Filter';
import Search from '@/components/table/Search';
import TableBody from '@/components/table/TableBody';
import TableHeader from '@/components/table/TableHeader';
import Dropdown from '@repo/ui/src/components/button/Dropdown';
import Pagination from '@repo/ui/src/components/table/Pagination';
import { SetStateAction } from 'jotai';
import { Dispatch, ReactNode } from 'react';

export interface paginationType {
  page: number;
  pageSize: number;
  totalPages: number;
}

interface ListTableProps<T extends object> {
  title: string;
  data?: T[];
  filterBody: () => filterBodyType[];
  search?: string | null;
  handleSearch: (value?: string) => void;
  renderHeader: (key: keyof T) => ReactNode;
  renderCell: (row: T, key: keyof T) => ReactNode;
  pagination: paginationType;
  setPagination: Dispatch<SetStateAction<paginationType>>;
  handleFilterReset: () => void;
  handleFilterSearch: () => void;
}

export default function ListTable<T extends object>({
  title,
  data,
  filterBody,
  search,
  handleSearch,
  renderHeader,
  renderCell,
  pagination,
  setPagination,
  handleFilterReset,
  handleFilterSearch,
}: ListTableProps<T>) {
  const PAGE_SIZE_LIST = [10, 30, 50];

  return (
    <div className='mt-8 flex flex-1 flex-col'>
      <p className='text-24 leading-32 font-700 mb-8'>{title}</p>
      <div className='flex justify-between'>
        <div className='mb-5 flex items-center gap-1'>
          <div className='w-20'>
            <Dropdown
              value={pagination.pageSize}
              valueList={PAGE_SIZE_LIST}
              onClick={(value) => {
                setPagination((prev) => ({ ...prev, pageSize: pagination.pageSize, page: value }));
              }}
              size='s'
            />
          </div>
          <p>개 씩</p>
        </div>

        <div className='flex gap-2'>
          <Search search={search} handleSearch={handleSearch} />
          <Filter
            filterBody={filterBody}
            handleReset={() => handleFilterReset}
            handleSearch={handleFilterSearch}
          />
        </div>
      </div>

      {data && data.length > 0 ? (
        <div
          className='border-grey-300 overflow-y-auto border'
          style={{ maxHeight: `calc(100vh - 320px)` }}
        >
          <table className='w-full px-1 text-left'>
            <TableHeader data={data} renderHeader={renderHeader} />
            <TableBody data={data} renderCell={renderCell} />
          </table>
        </div>
      ) : (
        <div
          className='mt-8 flex flex-1 items-center justify-center'
          style={{ minHeight: `calc(100vh - 352px)` }}
        >
          <p>데이터가 없습니다.</p>
        </div>
      )}

      <Pagination
        selectPage={pagination.page}
        setSelectPage={(value: number) => setPagination((prev) => ({ ...prev, page: value }))}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
