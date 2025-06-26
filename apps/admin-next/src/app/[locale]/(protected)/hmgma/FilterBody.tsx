'use client';

import { Dispatch } from 'react';

import Dropdown from '@repo/ui/src/components/button/Dropdown';
import { DateRange } from '@repo/ui/src/components/headless/Calendar';
import CalendarInput from '@repo/ui/src/components/headless/CalendarInput';
import { SetStateAction } from 'jotai';
import { useTranslations } from 'next-intl';

import { filterType } from '@/app/[locale]/(protected)/hmgma/page';
import { filterBodyType } from '@/components/table/Filter';
import {
  BrainEnum,
  useGetLineListQuery,
  useGetPositionListQuery,
  useGetProcessListQuery,
} from '@/graphql/generated/graphql';

interface useFilterBodyProps {
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
}

export default function useFilterBody({ filter, setFilter }: useFilterBodyProps): filterBodyType[] {
  const t = useTranslations('pc');

  const { data: line } = useGetLineListQuery();
  const { data: position } = useGetPositionListQuery();
  const { data: process } = useGetProcessListQuery();

  function addAllToArrayOption<
    T extends { id: number; code: string; name: string; createdAt: string; updatedAt: string },
  >(arr: T[]) {
    return [{ id: 0, code: 'ALL', name: 'ALL', createdAt: '', updatedAt: '' }, ...arr];
  }

  function addAllToArrayEnum<T extends string>(enumObject: Record<string, T>): T[] {
    return Object.values(enumObject).filter((value) => typeof value === 'string');
  }

  function addAllToArray<T>(arr: T[]): (T | 'ALL')[] {
    return ['ALL', ...arr];
  }

  return [
    {
      title: t('launcherUpdatedAt'),
      content: (
        <CalendarInput
          value={{ from: filter.launcherUpdatedAtStart, to: filter.launcherUpdatedAtEnd }}
          setValue={(value: DateRange) =>
            setFilter((prev) => ({
              ...prev,
              launcherUpdatedAtStart: value.from,
              launcherUpdatedAtEnd: value.to,
            }))
          }
          size='s'
        />
      ),
    },
    {
      title: t('line'),
      content: line ? (
        <Dropdown
          value={filter.line}
          valueList={addAllToArrayOption(line.lineList)}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              line: value,
            }));
          }}
          size='s'
          displayKey='name'
        />
      ) : null,
    },
    {
      title: t('position'),
      content: position ? (
        <Dropdown
          value={filter.position}
          valueList={addAllToArrayOption(position.positionList)}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              position: value,
            }));
          }}
          size='s'
          displayKey='name'
        />
      ) : null,
    },
    {
      title: t('process'),
      content: process ? (
        <Dropdown
          value={filter.process}
          valueList={addAllToArrayOption(process.processList)}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              process: value,
            }));
          }}
          size='s'
          displayKey='name'
        />
      ) : null,
    },
    {
      title: t('brain'),
      content: (
        <Dropdown
          value={filter.brain}
          valueList={addAllToArrayEnum(BrainEnum)}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              brain: value,
            }));
          }}
          size='s'
        />
      ),
    },
    {
      title: t('isLicense'),
      content: (
        <Dropdown
          value={filter.isLicense}
          valueList={addAllToArray([true, false])}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              isLicense: value,
            }));
          }}
          size='s'
        />
      ),
    },
    {
      title: t('isProgram'),
      content: (
        <Dropdown
          value={filter.isProgram}
          valueList={addAllToArray([true, false])}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              isProgram: value,
            }));
          }}
          size='s'
        />
      ),
    },
    {
      title: t('isNetwork'),
      content: (
        <Dropdown
          value={filter.isNetwork}
          valueList={addAllToArray([true, false])}
          onClick={(value) => {
            setFilter((prev) => ({
              ...prev,
              isNetwork: value,
            }));
          }}
          size='s'
        />
      ),
    },
  ];
}
