import { SelectImageType } from '@/hook/query/image';
import Image from 'next/image';

interface SelectedImageProps {
  data: SelectImageType | undefined;
}

export default function SelectedImage({ data }: SelectedImageProps) {
  return (
    <div className='relative flex w-full items-center justify-center'>
      {data && (
        <Image
          fill
          style={{ objectFit: 'contain' }}
          alt={data?.image_name ?? 'image'}
          src={`${process.env.NEXT_PUBLIC_API_URL}/images/${data?.image_folder}/${data?.image_name}`}
        />
      )}
    </div>
  );
}
