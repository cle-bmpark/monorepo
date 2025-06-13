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
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useState } from 'react';

export default function HMGMAListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get('search');

  const [isOpenProgram, setIsOpenProgram] = useState<boolean>(false);
  const [isOpenCompare, setIsOpenCompare] = useState<boolean>(false);
  const [selectedPcs, setSelectedPcs] = useState<pcListType[]>([]);
  const [search, setSearch] = useState<string | undefined | null>(searchQuery);

  const { data, loading, error } = useGetPcListQuery({
    variables: { input: { searchQuery: search } },
  });
  const filterBody = useFilterBody();

  const refetchData = () => {
    // 재검색 기능: 검색, 정렬, 필터, n개씩 기능에 모두 들어갑니다.
    return;
  };

  const handleSearch = (value?: string) => {
    setSearch(value);

    // url 에 검색 키워드 추가
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.replace(`?${params.toString()}`);
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

  if (error) return <Error />;

  return (
    <>
      {loading && <Loading />}
      <ListTable
        title='HMGMA'
        data={data?.pcList}
        search={search}
        handleSearch={handleSearch}
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
