import ObjectTable from '@/components/table/ObjectTable';
import { pcDetailType } from '@/types/graphql';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface PCStatusProps {
  data: pcDetailType;
}

export default function PCStatus({ data }: PCStatusProps) {
  const t = useTranslations('pc');

  const renderCPUKey = (key: keyof pcDetailType['cpuStatus']): ReactNode => {
    switch (key) {
      case 'name':
        return t('device-name');
      default:
        return t(`${key}`);
    }
  };

  const renderCPUValue = (
    key: keyof pcDetailType['cpuStatus'],
    value?: string | number,
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} ${data.cpuStatus.unit}`;
    }
  };

  const renderRamKey = (key: keyof pcDetailType['ramStatus']): ReactNode => t(`${key}`);
  const renderRamValue = (
    key: keyof pcDetailType['ramStatus'],
    value?: string | number,
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} ${data.ramStatus.unit}`;
    }
  };

  const renderNetworkKey = (key: keyof pcDetailType['networkStatus']): ReactNode => t(`${key}`);
  const renderNetworkValue = (
    key: keyof pcDetailType['networkStatus'],
    value?: string | number,
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} ${data.networkStatus.unit}`;
    }
  };

  const renderTempKey = (key: keyof pcDetailType['tempStatus']): ReactNode => t(`${key}`);
  const renderTempValue = (
    key: keyof pcDetailType['tempStatus'],
    value?: string | number,
  ): ReactNode => {
    switch (key) {
      default:
        return `${value} ${data.tempStatus.unit}`;
    }
  };

  return (
    <div className='flex gap-3'>
      <ObjectTable
        title={t('cpuStatus')}
        data={data.cpuStatus}
        renderKey={renderCPUKey}
        renderValue={renderCPUValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('gpuStatus')}
        data={data.gpuStatus}
        renderKey={renderCPUKey}
        renderValue={renderCPUValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('ramStatus')}
        data={data.ramStatus}
        renderKey={renderRamKey}
        renderValue={renderRamValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('networkStatus')}
        data={data.networkStatus}
        renderKey={renderNetworkKey}
        renderValue={renderNetworkValue}
        rowCount={1}
      />
      <ObjectTable
        title={t('tempStatus')}
        data={data.tempStatus}
        renderKey={renderTempKey}
        renderValue={renderTempValue}
        rowCount={1}
      />
    </div>
  );
}
