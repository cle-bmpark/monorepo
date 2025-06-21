'use client';

import { useParams } from 'next/navigation';

import DefaultInfo from '@/app/[locale]/(protected)/hmgma/[id]/DefaultInfo';
import DriverInfo from '@/app/[locale]/(protected)/hmgma/[id]/DriverInfo';
import PCStatus from '@/app/[locale]/(protected)/hmgma/[id]/PCStatus';
import ProgramInfo from '@/app/[locale]/(protected)/hmgma/[id]/ProgramInfo';
import StorageInfo from '@/app/[locale]/(protected)/hmgma/[id]/StorageInfo';
import Error from '@/app/[locale]/error';
import Loading from '@/app/[locale]/loading';
import { useGetPcDetailQuery } from '@/graphql/generated/graphql';
import { formatTimestampToDate } from '@/utils/format';

export default function HMGMADetailPage() {
  const params = useParams();
  const id = params['id'];
  const parsedId = typeof id === 'string' ? parseInt(id) : NaN;

  const { data, loading, error } = useGetPcDetailQuery({
    variables: { id: parsedId },
  });

  const defaultInfoData = {
    line: data?.pcDetail.line.name,
    process: data?.pcDetail.process.name,
    position: data?.pcDetail.position.name,
    brain: data?.pcDetail.brain,
    anydeskIp: data?.pcDetail.anydeskIp,
    ipv4: data?.pcDetail.ipv4,
    isLicense: data?.pcDetail.isLicense,
    isNetwork: data?.pcDetail.isNetwork,
    isProgram: data?.pcDetail.isProgram,
    launcherUpdatedAt: formatTimestampToDate(data?.pcDetail.launcherUpdatedAt),
  };

  if (loading) return <Loading />;
  if (error || !data) return <Error />;

  return (
    <div className='flex flex-1 flex-col gap-10'>
      <h1 className='flex gap-2'>
        HMGMA PC <p className='text-primary-500'>#{data.pcDetail.serialNumber}</p>
      </h1>
      <DefaultInfo data={defaultInfoData} />
      <ProgramInfo data={data.pcDetail.pcPrograms} />
      <DriverInfo data={data.pcDetail.pcDrivers} />
      <StorageInfo data={data.pcDetail.storageStatuses} />
      <PCStatus data={data.pcDetail} />
    </div>
  );
}
