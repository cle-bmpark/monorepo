import React from 'react';

import LinkButton from '@repo/ui/src/components/button/LinkButton';
import { useTranslations } from 'next-intl';

import NoData from '@/app/[locale]/(public)/result/[filter]/NoData';
import { ResultTranslationKeys } from '@/app/[locale]/(public)/result/[filter]/page';
import Error from '@/app/[locale]/error';
import Loading from '@/app/[locale]/loading';
import ItemBox from '@/components/itemBox';
import { ItemsQueryRuleOperator, useGetItemsByFilterQuery } from '@/graphql/generated/graphql';
import useClipboard from '@/hooks/common/useClipboard';

interface FilterProps {
  filter: string;
  value: string;
}

export default function Filter({ filter, value }: FilterProps) {
  const t = useTranslations('result');
  const copyToClipboard = useClipboard();

  const { data, error, loading } = useGetItemsByFilterQuery({
    variables: {
      boardId: process.env.NEXT_PUBLIC_ISSUE_BOARD,
      columnId:
        filter === 'phone'
          ? process.env.NEXT_PUBLIC_COLUMN_ID_PHONE
          : process.env.NEXT_PUBLIC_COLUMN_ID_EMAIL,
      compareValue: value,
      operator:
        filter === 'phone' ? ItemsQueryRuleOperator.ContainsTerms : ItemsQueryRuleOperator.AnyOf,
    },
  });

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className='flex flex-1 flex-col gap-2'>
      {data?.boards?.[0]?.items_page.items && data.boards?.[0].items_page.items.length > 0 ? (
        data.boards[0].items_page.items.map((item) => (
          <div className='shadow-light flex flex-col gap-4 p-4' key={item.id}>
            <div className='flex items-center'>
              <span className='text-grey-600'>ID&nbsp;</span>
              <LinkButton
                value={item.id}
                onClick={() => {
                  void copyToClipboard('ID', item.id);
                }}
              />
            </div>
            <p className='font-700'>{item.name}</p>
            <div className='flex flex-col gap-3'>
              {item.column_values
                .filter(({ text }) => !!text)
                .map((columnValue) => (
                  <React.Fragment key={`${columnValue.column.id}_${columnValue.column.title}`}>
                    <ItemBox
                      title={t(columnValue.column.title as ResultTranslationKeys)}
                      content={columnValue.text}
                      contentStyle={
                        columnValue.column.title === 'Status' ? 'text-primary-600' : undefined
                      }
                      contentLabel={columnValue.column.title === 'SLA' ? 'H' : undefined}
                    />
                  </React.Fragment>
                ))}
            </div>
          </div>
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
}
