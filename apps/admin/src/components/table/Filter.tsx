import Button from '@/components/button/Button';
import useClickOutside from '@/hooks/useClickOutside';
import { useTranslations } from 'next-intl';
import { ReactNode, useRef, useState } from 'react';
import { IoFilter } from 'react-icons/io5';

interface FilterProps {
  filterBody: { title: string; content: ReactNode }[];
  refetchData: (value?: string) => void;
}

export default function Filter({ filterBody, refetchData }: FilterProps) {
  const filterRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('table');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useClickOutside({
    ref: filterRef,
    onClick: () => setIsOpen(false),
  });

  return (
    <div className='relative'>
      <div className='flex w-24'>
        <Button
          value={t('filter')}
          isIcon
          icon={<IoFilter />}
          onClick={() => setIsOpen(true)}
          size='s'
        />
      </div>
      {isOpen && (
        <div
          className='top-15 border-grey-300 bg-grey-0 text-14 font-500 shadow-strong absolute right-0 z-10 w-max rounded-sm border'
          ref={filterRef}
        >
          <p className='border-grey-300 text-grey-700 border-b p-2'>{t('filter')}</p>

          {/* body */}
          <ul>
            {filterBody.map((key) => (
              <li
                className='border-grey-300 flex flex-col gap-1.5 border-b p-2'
                key={`filter_${key.title}`}
              >
                <p className='text-grey-700'>{key.title}</p>
                {key.content}
              </li>
            ))}
          </ul>

          {/* footer */}
          <div className='flex justify-between gap-10 p-2'>
            <div className='flex w-20'>
              <Button value={t('reset')} style='outline' size='s' />
            </div>
            <div className='flex w-20'>
              <Button
                value={t('search')}
                style='secondary'
                size='s'
                onClick={() => refetchData()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
