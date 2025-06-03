import { pcStatusType } from '@/dummy/HMGMA';
import Slider from '@repo/ui/src/components/slider/Slider';
import { useColorByTheme } from '@repo/ui/src/hooks/useColorByTheme';
import { FiHardDrive } from 'react-icons/fi';

interface StorageInfoProps {
  data: pcStatusType;
}

export default function StorageInfo({ data }: StorageInfoProps) {
  const grey700 = useColorByTheme('grey-700');

  return (
    <div className='flex items-center gap-12'>
      {data.storage.map((item) => (
        <div key={`storage_info_${item.name}`} className='flex flex-1 flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <h3 className='text-grey-800'>System Drive ({item.name}:)</h3>
            <div className='flex gap-1'>
              <p className='font-700'>{item.usage}</p>
              <p>GB</p>
              <p>/</p>
              <p className='font-700'>{item.total}</p>
              <p>GB</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FiHardDrive color={grey700} size={20} />
            <Slider
              amount={item.usage}
              total={item.total}
              tooltipText={`${item.usage}GB`}
              isNumber
            />
          </div>
        </div>
      ))}
    </div>
  );
}
