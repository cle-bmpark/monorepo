import { PcProgramType } from '@/types/graphql';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

interface ProgramAccordianProps {
  list: PcProgramType[];
  isAllOpen: boolean;
}

export default function ProgramAccordion({ list, isAllOpen }: ProgramAccordianProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(isAllOpen);
  }, [isAllOpen]);

  return (
    <div className='flex flex-col gap-1'>
      {/* program list */}
      {(list.length > 1 && !isOpen ? list.slice(0, 1) : list).map((item, index) => (
        <ul key={`program_${index}`} className='flex flex-1 gap-2'>
          <li className='flex items-center text-left'>
            <Image
              src={item.program.image}
              alt={`image_${item.program.name}`}
              width={20}
              height={20}
              className='shrink-0'
            />
          </li>
          <li className='text-14 leading-16 flex flex-1 items-center text-left'>
            {item.program.name}
          </li>
          <li className='text-14 leading-16 flex items-center text-left'>{item.program.version}</li>
        </ul>
      ))}

      {/* accordion button*/}
      {list.length > 1 && (
        <button
          className='bg-grey-100 flex cursor-pointer items-center justify-center py-1'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaAngleUp size={14} /> : <FaAngleDown size={14} />}
        </button>
      )}
    </div>
  );
}
