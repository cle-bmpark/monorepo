'use client';

import DefaultInfo from '@/app/[locale]/(protected)/hmgma/[id]/DefaultInfo';
import DriverInfo from '@/app/[locale]/(protected)/hmgma/[id]/DriverInfo';
import PCStatus from '@/app/[locale]/(protected)/hmgma/[id]/PCStatus';
import ProgramInfo from '@/app/[locale]/(protected)/hmgma/[id]/ProgramInfo';
import StorageInfo from '@/app/[locale]/(protected)/hmgma/[id]/StorageInfo';
import { detailData } from '@/dummy/HMGMA';
import { useParams } from 'next/navigation';

export default function HMGMADetailPage() {
  const params = useParams();

  return (
    <div className='flex flex-1 flex-col gap-10'>
      <h1 className='flex gap-2'>
        HMGMA PC <p className='text-primary-500'>#{params['id']}</p>
      </h1>
      <DefaultInfo data={detailData.default} />
      <ProgramInfo data={detailData.program} />
      <DriverInfo data={detailData.driver} />
      <PCStatus data={detailData.pcStatus} />
      <StorageInfo data={detailData.pcStatus} />
    </div>
  );
}
