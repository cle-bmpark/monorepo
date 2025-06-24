'use client';

import Header from '@/app/[locale]/main/(header)/Header';
import SelectedImage from '@/app/[locale]/main/(image)/SelectedImage';
import ImageSidebar from '@/app/[locale]/main/(imageSidebar)/ImageSidebar';
import ObjectSidebar from '@/app/[locale]/main/(objectSidebar)/ObjectSidebar';
import {
  ImageFileType,
  ImageFolderType,
  useImageFoldersQuery,
  useSelectedImageQuery,
} from '@/hook/query/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedFolder, setSelectedFolder] = useState<ImageFolderType | undefined>();
  const [selectedImage, setSelectedImage] = useState<ImageFileType | undefined>();

  const { data: folder } = useImageFoldersQuery();
  const { data: image } = useSelectedImageQuery(selectedFolder?.name, selectedImage?.name);

  useEffect(() => {
    setSelectedFolder(folder?.[0]);
  }, [folder]);

  return (
    <div className='flex flex-1 flex-col'>
      <Header selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
      <div className='flex flex-1 justify-between'>
        <ObjectSidebar data={image?.objects} />
        <SelectedImage data={image} />
        <ImageSidebar
          selectedFolder={selectedFolder}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}
