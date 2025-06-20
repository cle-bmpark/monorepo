'use client';

import Check from '@/app/[locale]/(public)/main/[status]/Check';
import Request from '@/app/[locale]/(public)/main/[status]/Request';
import SegmentControl, { SegmentControlType } from '@ui/components/tab/SegmentControl';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function Page() {
  const params = useParams<{ status: string }>();
  const t = useTranslations('main');

  const TAB_LIST = useMemo<SegmentControlType<string>[]>(
    () => [
      { key: 0, value: t('request') },
      { key: 1, value: t('check') },
    ],
    [t],
  );
  const [tab, setTab] = useState<SegmentControlType<string>>({ key: 0, value: t('request') });

  useEffect(() => {
    if (TAB_LIST[0] && TAB_LIST[1]) setTab(params.status === 'request' ? TAB_LIST[0] : TAB_LIST[1]);
  }, [params.status, TAB_LIST]);

  return (
    <div className='flex flex-1 flex-col'>
      <div>
        <SegmentControl
          value={tab}
          valueList={TAB_LIST}
          onClick={(value: SegmentControlType<string>) => setTab(value)}
        />
      </div>
      {tab.key === 0 && <Request />}
      {tab.key === 1 && <Check />}
    </div>
  );
}
