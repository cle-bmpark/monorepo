import { ImageFolderType, useImageFoldersQuery } from '@/hook/query/image';
import Image from 'next/image';

interface FolderSelectorProps {
  selectedFolder?: ImageFolderType;
  onClick: (selectedFolder?: ImageFolderType) => void;
}

export default function FolderSelector({ selectedFolder, onClick }: FolderSelectorProps) {
  const { data } = useImageFoldersQuery();

  return (
    <div>
      {!data ? (
        <p className='flex justify-center'>Not found data</p>
      ) : (
        <table className='border-grey-500 w-full border'>
          <thead className='text-16 font-700'>
            <tr className='border-grey-500 border-b'>
              <td className='border-grey-500 border-r p-4'>Image</td>
              <td className='border-grey-500 border-r p-4'>Name</td>
              <td className='border-grey-500 border-r p-4'>Image Count</td>
              <td className='p-4'>Labeled Count</td>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr
                key={item.name}
                className={`hover:bg-grey-100 cursor-pointer ${selectedFolder?.name === item.name && 'bg-primary-200'}`}
                onClick={() => onClick(item)}
              >
                <td className='border-grey-500 border-r p-4'>
                  <Image
                    width={160}
                    height={120}
                    alt={`image_modal_${item.thumbnail_path}`}
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail_path}`}
                  />
                </td>
                <td className='border-grey-500 border-r p-4'>{item.name}</td>
                <td className='border-grey-500 border-r p-4'>{item.labeled_count}</td>
                <td className='p-4'>{item.labeled_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
