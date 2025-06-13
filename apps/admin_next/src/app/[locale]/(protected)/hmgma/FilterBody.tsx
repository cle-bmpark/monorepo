'use client';

import { filterBodyType } from '@/components/table/Filter';
import {
  BrainEnum,
  useGetLineListQuery,
  useGetPositionListQuery,
  useGetProcessListQuery,
} from '@/graphql/generated/graphql';
import { lineType, positionType, processType } from '@/types/graphql';
import { getObjectKeys } from '@/utils/object';
import Dropdown from '@repo/ui/src/components/button/Dropdown';
import { DateRange } from '@repo/ui/src/components/headless/Calendar';
import CalendarInput from '@repo/ui/src/components/headless/CalendarInput';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

const COMMON_ENTITY_INITIAL = {
  id: 0,
  code: '',
  name: '',
  createdAt: '',
  updatedAt: '',
};

export default function useFilterBody(): filterBodyType[] {
  const t = useTranslations('pc');

  const { data: line } = useGetLineListQuery();
  const { data: position } = useGetPositionListQuery();
  const { data: process } = useGetProcessListQuery();

  const [filter, setFilter] = useImmer<{
    line: lineType;
    position: positionType;
    process: processType;
    brain: keyof typeof BrainEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    launcherUpdateAt: DateRange;
  }>({
    line: COMMON_ENTITY_INITIAL,
    position: COMMON_ENTITY_INITIAL,
    process: COMMON_ENTITY_INITIAL,
    brain: 'Main',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: {
      from: new Date(),
      to: new Date(),
    },
  });

  useEffect(() => {
    setFilter((draft) => {
      draft.line = line?.lineList[0] ?? COMMON_ENTITY_INITIAL;
      draft.position = position?.positionList[0] ?? COMMON_ENTITY_INITIAL;
      draft.process = process?.processList[0] ?? COMMON_ENTITY_INITIAL;
    });
  }, [line, position, process, setFilter]);

  return [
    {
      title: t('launcherUpdatedAt'),
      content: (
        <CalendarInput
          value={filter.launcherUpdateAt}
          setValue={(value: DateRange) =>
            setFilter((draft) => {
              draft.launcherUpdateAt = value;
            })
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
          valueList={line.lineList}
          onClick={(value) => {
            setFilter((draft) => {
              draft.line = value;
            });
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
          valueList={position.positionList}
          onClick={(value) => {
            setFilter((draft) => {
              draft.position = value;
            });
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
          valueList={process.processList}
          onClick={(value) => {
            setFilter((draft) => {
              draft.process = value;
            });
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
          valueList={getObjectKeys(BrainEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.brain = value;
            });
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
          valueList={[true, false]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.isLicense = value;
            });
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
          valueList={[true, false]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.isNetwork = value;
            });
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
          valueList={[true, false]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.isProgram = value;
            });
          }}
          size='s'
        />
      ),
    },
  ];
}
