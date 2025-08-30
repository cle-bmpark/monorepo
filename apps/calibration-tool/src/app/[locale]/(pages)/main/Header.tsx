'use client';

import Init from '@/app/[locale]/(pages)/main/newProjectModal/Init';
import { projectListType } from '@/dummies/ProjectList';
import Button from '@ui/components/button/Button';
import { modalAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  data: projectListType[];
}

export default function Header({ data }: HeaderProps) {
  const t = useTranslations('main');
  const tModal = useTranslations('new-project-modal');
  const [, setModal] = useAtom(modalAtom);

  const onClick = () => {
    setModal({
      visible: true,
      title: t('new-project'),
      content: <Init />,
      width: 'w-fit',
      confirmLabel: tModal('create-project'),
    });
  };

  return (
    <div className='flex w-full items-center justify-between'>
      <p className='text-bold-16 flex gap-1'>
        {t('project-list')}
        <span className={`${data.length < 1 && 'text-grey-500'}`}>({data.length})</span>
      </p>
      <div>
        <Button value={t('new-project')} isIcon style='secondary' onClick={onClick} />
      </div>
    </div>
  );
}
