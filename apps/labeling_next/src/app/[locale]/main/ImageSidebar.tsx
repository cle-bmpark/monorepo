import CheckBox from '@ui/components/radio/CheckBox';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageSidebar() {
  const dummy: {
    image: string;
    title: string;
    isLabeled: boolean;
    objects: number;
    markerCount: number;
  }[] = [
    { image: '', title: 'dummy_000.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_001.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_002.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_003.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_004.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_005.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_006.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_007.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_008.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_009.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_010.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_011.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_012.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_013.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_014.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_015.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_016.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_017.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_018.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_019.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_020.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_021.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_022.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_023.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_024.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_025.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_026.png', isLabeled: false, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_027.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_028.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_029.png', isLabeled: true, objects: 1, markerCount: 1 },
    { image: '', title: 'dummy_030.png', isLabeled: false, objects: 1, markerCount: 1 },
  ];

  const [isCheck, setIsCheck] = useState<boolean>(false);

  const onCheck = () => {
    setIsCheck(!isCheck);
    return;
  };

  return (
    <div className='border-grey-500 flex flex-col border-l'>
      {/* Header */}
      <div className='flex gap-28 p-4'>
        <div className='flex items-center gap-1'>
          <h2>Images</h2>
          <h4>(index / total)</h4>
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
        {dummy.map((item) => (
          <li
            key={item.title}
            className={`hover:bg-grey-100 flex cursor-pointer items-center gap-8 p-4 ${item.title === 'dummy_001.png' && 'bg-primary-200'}`}
          >
            <Image width={160} height={120} src={item.image} alt={`image_${item.title}`} />
            <div className='flex h-full flex-col justify-between'>
              <div>
                <h2>{item.title}</h2>
                <p className={`${item.isLabeled ? 'text-blue-600' : 'text-primary-500'}`}>
                  {item.isLabeled ? 'Labeled' : 'Not labeled'}
                </p>
              </div>
              <div>
                <p>Objects:&nbsp;{item.objects}</p>
                <p>Marker Count:&nbsp;{item.markerCount}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
