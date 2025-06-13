'use client';

import CompareModal from '@/app/[locale]/(protected)/hmgma/CompareModal';
import { default as useFilterBody } from '@/app/[locale]/(protected)/hmgma/FilterBody';
import RenderCell from '@/app/[locale]/(protected)/hmgma/RenderCell';
import RenderHeader from '@/app/[locale]/(protected)/hmgma/RenderHeader';
import Error from '@/app/[locale]/error';
import Loading from '@/app/[locale]/loading';
import ListTable from '@/components/table/ListTable';
import { useGetPcListQuery } from '@/graphql/generated/graphql';
import { pcListType } from '@/types/graphql';
import { ReactNode, useState } from 'react';

export default function HMGMAListPage() {
  const { data, loading, error } = useGetPcListQuery();
  const filterBody = useFilterBody();

  const [isOpenProgram, setIsOpenProgram] = useState<boolean>(false);
  const [isOpenCompare, setIsOpenCompare] = useState<boolean>(false);
  const [selectedPcs, setSelectedPcs] = useState<pcListType[]>([]);

  const refetchData = () => {
    // 재검색 기능: 검색, 정렬, 필터, n개씩 기능에 모두 들어갑니다.
    return;
  };

  const renderHeader = (key: keyof pcListType): ReactNode => (
    <RenderHeader
      headerKey={key}
      isOpenProgram={isOpenProgram}
      setIsOpenProgram={setIsOpenProgram}
      refetchData={refetchData}
      selectedPcs={selectedPcs}
      setIsOpenCompare={setIsOpenCompare}
    />
  );

  const renderCell = (row: pcListType, key: keyof pcListType) => (
    <RenderCell
      row={row}
      rowKey={key}
      isOpenProgram={isOpenProgram}
      selectedPcs={selectedPcs}
      setSelectedPcs={setSelectedPcs}
    />
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <ListTable
        title='HMGMA'
        data={data?.pcList}
        refetchData={refetchData}
        filterBody={() => filterBody}
        renderHeader={renderHeader}
        renderCell={renderCell}
      />
      <CompareModal
        visible={isOpenCompare}
        setVisible={setIsOpenCompare}
        selectedPcs={selectedPcs}
        setSelectedPcs={setSelectedPcs}
      />
    </>
  );
}
