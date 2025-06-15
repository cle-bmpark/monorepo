'use client';

import CompareModal from '@/app/[locale]/(protected)/hmgma/CompareModal';
import { default as useFilterBody } from '@/app/[locale]/(protected)/hmgma/FilterBody';
import RenderCell from '@/app/[locale]/(protected)/hmgma/RenderCell';
import RenderHeader from '@/app/[locale]/(protected)/hmgma/RenderHeader';
import Error from '@/app/[locale]/error';
import Loading from '@/app/[locale]/loading';
import ListTable, { paginationType } from '@/components/table/ListTable';
import { BrainEnum, PcSortField, SortOrder, useGetPcListQuery } from '@/graphql/generated/graphql';
import { lineType, pcListType, positionType, processType } from '@/types/graphql';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export interface filterType {
  launcherUpdatedAtStart: Date | undefined;
  launcherUpdatedAtEnd: Date | undefined;
  line: lineType;
  position: positionType;
  process: processType;
  brain: BrainEnum | 'ALL';
  isLicense: boolean | 'ALL';
  isProgram: boolean | 'ALL';
  isNetwork: boolean | 'ALL';
}

const filterInitial: filterType = {
  launcherUpdatedAtStart: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
  launcherUpdatedAtEnd: new Date(),
  line: {
    id: 0,
    code: 'ALL',
    name: 'ALL',
    createdAt: '',
    updatedAt: '',
  },
  position: {
    id: 0,
    code: 'ALL',
    name: 'ALL',
    createdAt: '',
    updatedAt: '',
  },
  process: {
    id: 0,
    code: 'ALL',
    name: 'ALL',
    createdAt: '',
    updatedAt: '',
  },
  brain: 'ALL',
  isLicense: 'ALL',
  isProgram: 'ALL',
  isNetwork: 'ALL',
};

export default function HMGMAListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get('search');

  const [isOpenProgram, setIsOpenProgram] = useState<boolean>(false);
  const [isOpenCompare, setIsOpenCompare] = useState<boolean>(false);
  const [selectedPcs, setSelectedPcs] = useState<pcListType[]>([]);
  const [search, setSearch] = useState<string | undefined | null>(searchQuery);
  const [order, setOrder] = useState<{ orderBy?: PcSortField; sortOrder?: SortOrder }>({});
  const [pagination, setPagination] = useState<paginationType>({
    page: 1,
    pageSize: 10,
    totalPages: 1,
  });
  const [localFilter, setLocalFilter] = useState<filterType>(filterInitial);
  const [activeFilter, setActiveFilter] = useState<filterType>(filterInitial);

  const { data, loading, error } = useGetPcListQuery({
    variables: {
      input: {
        searchQuery: search,
        orderBy: order.orderBy,
        sortOrder: order.sortOrder,
        page: pagination.page,
        pageSize: pagination.pageSize,
        launcherUpdatedAtStart:
          activeFilter.launcherUpdatedAtStart === undefined
            ? undefined
            : activeFilter.launcherUpdatedAtStart.toString(),
        launcherUpdatedAtEnd:
          activeFilter.launcherUpdatedAtEnd === undefined
            ? undefined
            : activeFilter.launcherUpdatedAtEnd.toString(),
        lineId: activeFilter.line.id === 0 ? undefined : activeFilter.line.id,
        positionId: activeFilter.position.id === 0 ? undefined : activeFilter.position.id,
        processId: activeFilter.process.id === 0 ? undefined : activeFilter.process.id,
        brain: activeFilter.brain === 'ALL' ? undefined : activeFilter.brain,
        isLicense: activeFilter.isLicense === 'ALL' ? undefined : activeFilter.isLicense,
        isProgram: activeFilter.isProgram === 'ALL' ? undefined : activeFilter.isProgram,
        isNetwork: activeFilter.isNetwork === 'ALL' ? undefined : activeFilter.isNetwork,
      },
    },
  });

  const filterBody = useFilterBody({ filter: localFilter, setFilter: setLocalFilter });
  const handleFilterReset = () => {
    setSearch(null);
    setOrder({});
    setActiveFilter(filterInitial);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };
  const handleFilterSearch = () => {
    setSearch(null);
    setOrder({});
    setActiveFilter(localFilter);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handleSearch = (value?: string) => {
    setSearch(value);
    setOrder({});
    setActiveFilter(filterInitial);
    setPagination((prev) => ({ ...prev, page: 1 }));

    // url 에 검색 키워드 추가
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.replace(`?${params.toString()}`);
  };

  const renderHeader = (key: keyof pcListType): ReactNode | null => {
    if (key === '__typename' || key === 'id') return null;

    return (
      <RenderHeader
        headerKey={key}
        isOpenProgram={isOpenProgram}
        setIsOpenProgram={setIsOpenProgram}
        selectedPcs={selectedPcs}
        setIsOpenCompare={setIsOpenCompare}
        order={order}
        setOrder={setOrder}
      />
    );
  };
  const renderCell = (row: pcListType, key: keyof pcListType) => {
    if (key === '__typename' || key === 'id') return null;

    return (
      <RenderCell
        row={row}
        rowKey={key}
        isOpenProgram={isOpenProgram}
        selectedPcs={selectedPcs}
        setSelectedPcs={setSelectedPcs}
      />
    );
  };

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      totalPages: data?.pcList.totalPages ?? 1,
    }));
  }, [data]);

  if (error) return <Error />;

  return (
    <>
      {loading && <Loading />}
      <ListTable
        title='HMGMA'
        data={data?.pcList.items}
        search={search}
        handleSearch={handleSearch}
        filterBody={() => filterBody}
        renderHeader={renderHeader}
        renderCell={renderCell}
        pagination={pagination}
        setPagination={setPagination}
        handleFilterReset={handleFilterReset}
        handleFilterSearch={handleFilterSearch}
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
