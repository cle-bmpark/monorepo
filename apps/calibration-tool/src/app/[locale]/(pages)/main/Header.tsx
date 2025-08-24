'use client';

import { projectListType } from '@/dummies/ProjectList';
import Button from '@ui/components/button/Button';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  data: projectListType[];
}

export default function Header({ data }: HeaderProps) {
  const t = useTranslations('main');

  return (
    <div className='flex w-full items-center justify-between'>
      <p className='text-bold-16 flex gap-1'>
        {t('project-list')}
        <span className={`${data.length < 1 && 'text-grey-500'}`}>({data.length})</span>
      </p>
      <div>
        <Button value={t('new-project')} isIcon style='secondary' />
      </div>
    </div>
  );
}
