'use client';

import Header from '@/app/[locale]/main/Header';
import ObjectSidebar from '@/app/[locale]/main/ObjectSidebar';
import ImageSidebar from './ImageSidebar';

export default function Page() {
  return (
    <div className='flex flex-1 flex-col'>
      <Header />
      <div className='flex flex-1 justify-between'>
        <ObjectSidebar />
        <ImageSidebar />
      </div>
    </div>
  );
}
