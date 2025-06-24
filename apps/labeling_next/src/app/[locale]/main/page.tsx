'use client';

import Header from '@/app/[locale]/main/(header)/Header';
import ObjectSidebar from '@/app/[locale]/main/(objectSidebar)/ObjectSidebar';
import { ImageFileType, ImageFolderType, useSelectedImageQuery } from '@/hook/query/image';
import { useState } from 'react';
import ImageSidebar from './(imageSidebar)/ImageSidebar';

export default function Page() {
  const [selectedFolder, setSelectedFolder] = useState<ImageFolderType | undefined>();
  const [selectedImage, setSelectedImage] = useState<ImageFileType | undefined>();

  const { data } = useSelectedImageQuery(selectedFolder?.name, selectedImage?.name);

  return (
    <div className='flex flex-1 flex-col'>
      <Header selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
      <div className='flex flex-1 justify-between'>
        <ObjectSidebar data={data?.objects} />
        <ImageSidebar
          selectedFolder={selectedFolder}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}
