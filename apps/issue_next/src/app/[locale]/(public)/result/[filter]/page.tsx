'use client';

import Button from '@ui/components/button/Button';
import { useTranslations } from 'next-intl';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';

import Filter from '@/app/[locale]/(public)/result/[filter]/Filter';
import Id from '@/app/[locale]/(public)/result/[filter]/Id';

export type ResultTranslationKeys =
  | 'Description'
  | 'Created at'
  | 'Priority'
  | 'Assignee'
  | 'Status'
  | 'Due date'
  | 'Files'
  | 'Type'
  | 'SLA';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations('result');

  const params = useParams<{ locale: string; filter: string }>();
  const value = searchParams.get('value') ?? '';

  return (
    <div className='flex flex-1 flex-col gap-4 overflow-y-auto p-4'>
      {params.filter === 'id' ? <Id id={value} /> : <Filter filter={params.filter} value={value} />}

      <div className='flex w-full'>
        <Button
          value={t('search')}
          onClick={() => router.push('/main/search')}
          style='secondary'
          isIcon
          icon={<IoSearch />}
        />
      </div>
    </div>
  );
}
