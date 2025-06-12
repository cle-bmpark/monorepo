import { LineEnum, PCEnum, PositionEnum, ProcessEnum } from '@/dummy/HMGMA';
import { getObjectKeys } from '@/utils/object';
import Dropdown from '@repo/ui/src/components/button/Dropdown';
import { DateRange } from '@repo/ui/src/components/headless/Calendar';
import CalendarInput from '@repo/ui/src/components/headless/CalendarInput';
import { useTranslations } from 'next-intl';
import { useImmer } from 'use-immer';

export default function FilterBody() {
  const t = useTranslations('mockup');

  const [filter, setFilter] = useImmer<{
    line: keyof typeof LineEnum;
    process: keyof typeof ProcessEnum;
    position: keyof typeof PositionEnum;
    pc: keyof typeof PCEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    launcherUpdateAt: DateRange;
  }>({
    line: 'LINE_ONE',
    process: 'GLASS',
    position: 'FRONT',
    pc: 'MAIN',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: {
      from: new Date(),
      to: new Date(),
    },
  });

  return [
    {
      title: t('launcherUpdateAt'),
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
      content: (
        <Dropdown
          value={filter.line}
          valueList={getObjectKeys(LineEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.line = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('process'),
      content: (
        <Dropdown
          value={filter.process}
          valueList={getObjectKeys(ProcessEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.process = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('position'),
      content: (
        <Dropdown
          value={filter.position}
          valueList={getObjectKeys(PositionEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.position = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('pc'),
      content: (
        <Dropdown
          value={filter.pc}
          valueList={getObjectKeys(PCEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.pc = value;
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
