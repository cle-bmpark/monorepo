'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import NoData from '@/app/[locale]/(public)/result/[filter]/NoData';
import { ResultTranslationKeys } from '@/app/[locale]/(public)/result/[filter]/page';
import Error from '@/app/[locale]/error';
import Loading from '@/app/[locale]/loading';
import ItemBox from '@/components/itemBox';
import { useGetItemsByIdQuery } from '@/graphql/generated/graphql';
import useClipboard from '@/hooks/common/useClipboard';
import LinkButton from '@repo/ui/src/components/button/LinkButton';
interface IdProps {
  id: string;
}

export default function Id({ id }: IdProps) {
  const t = useTranslations('result');
  const copyToClipboard = useClipboard();

  const { data, error, loading } = useGetItemsByIdQuery({
    variables: { id: id },
  });

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className='flex flex-1 flex-col'>
      {data?.items && data.items.length > 0 ? (
        <div className='shadow-light flex flex-col gap-4 p-4'>
          <div className='flex items-center'>
            <span className='text-grey-600'>ID&nbsp;</span>
            <LinkButton
              value={data.items[0]?.id ?? ''}
              onClick={() => {
                void copyToClipboard('ID', data.items?.[0]?.id ?? '');
              }}
            />
          </div>
          <p className='font-700'>{data.items[0]?.name}</p>

          <div className='flex flex-col gap-3'>
            {data.items[0]?.column_values
              .filter(({ text }) => !!text)
              .map((item) => (
                <React.Fragment key={`${item.column.id}_${item.text}`}>
                  <ItemBox
                    title={t(item.column.title as ResultTranslationKeys)}
                    content={item.text}
                    contentStyle={item.column.title === 'Status' ? 'text-primary-600' : undefined}
                    contentLabel={item.column.title === 'SLA' ? 'H' : undefined}
                  />
                </React.Fragment>
              ))}
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}
