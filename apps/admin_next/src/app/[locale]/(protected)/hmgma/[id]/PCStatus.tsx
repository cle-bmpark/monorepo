import ObjectTable from '@/components/table/ObjectTable';
import { pcStatusType } from '@/dummy/HMGMA';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface PCStatusProps {
  data: pcStatusType;
}

export default function PCStatus({ data }: PCStatusProps) {
  const t = useTranslations('mockup');

  const renderCPUKey = (key: keyof (typeof data)['cpu' | 'gpu']): ReactNode => {
    switch (key) {
      case 'name':
        return t('device-name');
      default:
        return t(`${key}`);
    }
  };
  const renderCPUValue = (
    key: keyof (typeof data)['cpu' | 'gpu'],
    value: (typeof data)['cpu' | 'gpu']['name' | 'usage'],
  ): ReactNode => {
    switch (key) {
      case 'usage':
        return `${value} %`;
      default:
        return value;
    }
  };

  const renderRamKey = (key: keyof (typeof data)['ram']): ReactNode => t(`${key}`);
  const renderRamValue = (
    key: keyof (typeof data)['ram'],
    value: (typeof data)['ram']['average' | 'current' | 'highest' | 'lowest' | 'total'],
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} GB`;
    }
  };

  const renderNetworkKey = (key: keyof (typeof data)['network']): ReactNode => t(`${key}`);
  const renderNetworkValue = (
    key: keyof (typeof data)['network'],
    value: (typeof data)['network']['receive' | 'send'],
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} Kbps`;
    }
  };

  const renderTempKey = (key: keyof (typeof data)['temp']): ReactNode => t(`${key}`);
  const renderTempValue = (
    key: keyof (typeof data)['temp'],
    value: (typeof data)['temp']['average' | 'current' | 'highest' | 'lowest'],
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} °C`;
    }
  };

  return (
    <div className='flex gap-3'>
      <ObjectTable
        title={t('cpu')}
        data={data.cpu}
        renderKey={renderCPUKey}
        renderValue={renderCPUValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('gpu')}
        data={data.gpu}
        renderKey={renderCPUKey}
        renderValue={renderCPUValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('ram')}
        data={data.ram}
        renderKey={renderRamKey}
        renderValue={renderRamValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('network')}
        data={data.network}
        renderKey={renderNetworkKey}
        renderValue={renderNetworkValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('temp')}
        data={data.temp}
        renderKey={renderTempKey}
        renderValue={renderTempValue}
        rowCount={1}
      />
    </div>
  );
}
