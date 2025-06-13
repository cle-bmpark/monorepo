import ScrollTable from '@/components/table/ScrollTable';
import { pcProgramsType, programsType } from '@/types/graphql';
import { formatTimestampToDate } from '@/utils/format';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReactNode } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';

interface ProgramInfoProps {
  data: pcProgramsType;
}

export default function ProgramInfo({ data }: ProgramInfoProps) {
  const t = useTranslations('pc');
  const tHMGMA = useTranslations('hmgma');

  const actualData = data.map((item) => item.program);

  const refetchData = () => {
    return;
  };

  const renderHeader = (key: keyof programsType): ReactNode => {
    {
      switch (key) {
        case '__typename':
          return null;

        case 'image':
          return <span>{t(`${key}`)}</span>;

        case 'name':
          return (
            <div className='flex items-center gap-1'>
              <span>{t('program-name')}</span>
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

  const renderCell = (row: programsType, key: keyof programsType): ReactNode => {
    switch (key) {
      case '__typename':
        return null;

      case 'image':
        return <Image src={row[key]} alt={`image_${row[key]}`} width={20} height={20} />;

      case 'programUpdatedAt':
        return <span>{formatTimestampToDate(row[key])}</span>;

      default:
        return row[key];
    }
  };

  return (
    <ScrollTable
      title={tHMGMA('program-title')}
      data={actualData}
      refetchData={refetchData}
      renderHeader={renderHeader}
      renderCell={renderCell}
    />
  );
}
