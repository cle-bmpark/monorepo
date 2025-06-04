import ScrollTable from '@/components/table/ScrollTable';
import { driverType } from '@/dummy/HMGMA';
import Dropdown from '@repo/ui/src/components/button/Dropdown';
import { DateRange } from '@repo/ui/src/components/headless/Calendar';
import CalendarInput from '@repo/ui/src/components/headless/CalendarInput';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReactNode } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { useImmer } from 'use-immer';

interface DriverInfoProps {
  data: driverType[];
}

export default function DriverInfo({ data }: DriverInfoProps) {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');

  const [filter, setFilter] = useImmer<{
    installedAt: DateRange;
    name: string;
    version: string;
  }>({
    installedAt: {
      from: new Date(),
      to: new Date(),
    },
    name: data[0]?.name ?? '',
    version: data[0]?.version ?? '',
  });

  const refetchData = () => {
    return;
  };

  const filterBody = [
    {
      title: t('installedAt'),
      content: (
        <CalendarInput
          value={filter.installedAt}
          setValue={(value: DateRange) =>
            setFilter((draft) => {
              draft.installedAt = value;
            })
          }
          size='s'
        />
      ),
    },
    {
      title: t('driver-name'),
      content: (
        <Dropdown
          value={filter.name}
          valueList={[...new Set(data.map((item) => item.name))]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.name = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('version'),
      content: (
        <Dropdown
          value={filter.version}
          valueList={[...new Set(data.map((item) => item.version))]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.version = value;
            });
          }}
          size='s'
        />
      ),
    },
  ];

  const renderHeader = (key: keyof driverType): ReactNode => {
    {
      switch (key) {
        case 'image':
          return <span>{t(`${key}`)}</span>;

        case 'name':
          return (
            <div className='flex items-center gap-1'>
              <span>{t('driver-name')}</span>
              <HiOutlineSwitchVertical
                size={16}
                className='shrink-0 cursor-pointer'
                onClick={() => refetchData()}
              />
            </div>
          );

        default:
          return (
            <div className='flex items-center gap-1'>
              <span>{t(`${key}`)}</span>
              <HiOutlineSwitchVertical
                size={16}
                className='shrink-0 cursor-pointer'
                onClick={() => refetchData()}
              />
            </div>
          );
      }
    }
  };

  const renderCell = (row: driverType, key: keyof driverType): ReactNode => {
    switch (key) {
      case 'image':
        return <Image src={row[key]} alt={`image_${row[key]}`} width={20} height={20} />;
      default:
        return row[key];
    }
  };

  return (
    <ScrollTable
      title={tHMGMA('driver-title')}
      data={data}
      filterBody={filterBody}
      refetchData={refetchData}
      renderHeader={renderHeader}
      renderCell={renderCell}
    />
  );
}
