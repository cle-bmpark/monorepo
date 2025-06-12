'use client';

import FilterBody from '@/app/[locale]/(protected)/hmgma/FilterBody';
import RenderCell from '@/app/[locale]/(protected)/hmgma/RenderCell';
import RenderHeader from '@/app/[locale]/(protected)/hmgma/RenderHeader';
import ListTable from '@/components/table/ListTable';
import { listData, listType } from '@/dummy/HMGMA';
import { ReactNode, useState } from 'react';
import CompareModal from './CompareModal';

export default function HMGMAListPage() {
  const [isOpenProgram, setIsOpenProgram] = useState<boolean>(false);
  const [isOpenCompare, setIsOpenCompare] = useState<boolean>(false);
  const [serialNumbers, setSerialNumbers] = useState<string[]>([]);

  const refetchData = () => {
    // 재검색 기능: 검색, 정렬, 필터, n개씩 기능에 모두 들어갑니다.
    return;
  };

  const renderHeader = (key: keyof listType): ReactNode => (
    <RenderHeader
      headerKey={key}
      isOpenProgram={isOpenProgram}
      setIsOpenProgram={setIsOpenProgram}
      refetchData={refetchData}
      serialNumbers={serialNumbers}
      setIsOpenCompare={setIsOpenCompare}
    />
  );

  const renderCell = (row: listType, key: keyof listType) => (
    <RenderCell
      row={row}
      rowKey={key}
      isOpenProgram={isOpenProgram}
      serialNumbers={serialNumbers}
      setSerialNumbers={setSerialNumbers}
    />
  );

  return (
    <>
      <ListTable
        title='HMGMA'
        data={listData}
        refetchData={refetchData}
        filterBody={FilterBody()}
        renderHeader={renderHeader}
        renderCell={renderCell}
      />
      <CompareModal
        visible={isOpenCompare}
        setVisible={setIsOpenCompare}
        serialNumbers={serialNumbers}
        setSerialNumbers={setSerialNumbers}
      />
    </>
  );
}
