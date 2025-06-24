import {
  ImageFileObjectType,
  ImageFileType,
  ImageFolderType,
  useImagesQuery,
} from '@/hook/query/image';
import CheckBox from '@ui/components/radio/CheckBox';
import { SetStateAction } from 'jotai';
import Image from 'next/image';
import { Dispatch, useEffect, useState } from 'react';

interface ImageSidebarProps {
  selectedFolder?: ImageFolderType;
  selectedImage?: ImageFileType;
  setSelectedImage: Dispatch<SetStateAction<ImageFileType | undefined>>;
}

export default function ImageSidebar({
  selectedFolder,
  selectedImage,
  setSelectedImage,
}: ImageSidebarProps) {
  const { data } = useImagesQuery(selectedFolder?.name);

  const [seletedIndex, setSelectedIndex] = useState<number>(1);
  const [imageData, setImageData] = useState<ImageFileType[] | undefined>(data);
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const getObjectsMarkerCount = (objects: ImageFileObjectType[]) => {
    return objects.map((obj) => obj.markers.length).reduce((a, b) => a + b, 0);
  };

  const onCheck = () => {
    if (!isCheck) setImageData(data?.filter((item) => getObjectsMarkerCount(item.objects)));
    else setImageData(data);

    setIsCheck(!isCheck);
  };

  const onClick = (index: number, item?: ImageFileType) => {
    setSelectedImage(item);
    setSelectedIndex(index + 1);
  };

  useEffect(() => {
    setImageData(data);
    setIsCheck(false);
    if (data) {
      setSelectedImage(data[0]);
      setSelectedIndex(1);
    }
  }, [data, setSelectedImage]);

  return (
    <div className='border-grey-500 flex flex-col border-l'>
      {/* Header */}
      <div className='flex justify-between p-4'>
        <div className='flex items-center gap-1'>
          <h2>Images</h2>
          <h4>
            ({seletedIndex} / {imageData?.length})
          </h4>
        </div>
        <CheckBox
          label='Show unlabeled'
          isCheck={isCheck}
          onClick={onCheck}
          size='s'
          style='primary500'
        />
      </div>

      {/* List */}
      <ul className='flex max-h-[calc(100vh-248px)] flex-col overflow-y-auto'>
        {imageData?.map((item, index) => (
          <li key={item.name} className='flex flex-1'>
            <button
              className={`hover:bg-grey-100 flex flex-1 cursor-pointer items-center justify-between gap-12 p-4 ${item.name === selectedImage?.name && 'bg-primary-200'}`}
              onClick={() => onClick(index, item)}
            >
              <Image
                width={160}
                height={120}
                src={`${process.env.NEXT_PUBLIC_API_URL}${item.url}`}
                alt={`image_${item.name}`}
              />
              <div className='flex h-full flex-col justify-between text-end'>
                <div>
                  <h2>{item.name}</h2>
                  <p
                    className={`${getObjectsMarkerCount(item.objects) ? 'text-blue-600' : 'text-primary-500'}`}
                  >
                    {getObjectsMarkerCount(item.objects) ? 'Labeled' : 'Not labeled'}
                  </p>
                </div>
                <div>
                  <p>Objects:&nbsp;{item.objects.length}</p>
                  <p>Marker Count:&nbsp;{getObjectsMarkerCount(item.objects)}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
