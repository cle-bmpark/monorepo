'use client';

import { useEffect, useMemo, useState } from 'react';

import SegmentControl from '@ui/components/tab/SegmentControl';
import { TabType } from '@ui/components/tab/Tab';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';

import Request from '@/app/[locale]/(public)/main/[status]/Request';
import Search from '@/app/[locale]/(public)/main/[status]/Search';

export default function Page() {
  const params = useParams<{ status: string }>();
  const router = useRouter();
  const t = useTranslations('main');

  const TAB_LIST = useMemo<TabType<string>[]>(
    () => [
      { key: 'request', value: t('request') },
      { key: 'search', value: t('search') },
    ],
    [t],
  );
  const [tab, setTab] = useState<TabType<string>>({
    key: 'request',
    value: t('request'),
  });

  useEffect(() => {
    if (TAB_LIST[0] && TAB_LIST[1]) setTab(params.status === 'request' ? TAB_LIST[0] : TAB_LIST[1]);
  }, [params.status, TAB_LIST]);

  return (
    <div className='flex flex-1 flex-col'>
      <div>
        <SegmentControl
          value={tab}
          valueList={TAB_LIST}
          onClick={(value: TabType<string>) => router.push(`/main/${value.key}`)}
        />
      </div>
      <div className='bg-grey-50 flex flex-1 flex-col p-4'>
        {tab.key === 'request' && <Request />}
        {tab.key === 'search' && <Search />}
      </div>
    </div>
  );
}
