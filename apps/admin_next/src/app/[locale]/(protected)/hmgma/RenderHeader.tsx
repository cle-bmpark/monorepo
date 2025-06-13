import { toastAtom } from '@/jotai/modalAtoms';
import { pcListType } from '@/types/graphql';
import Button from '@repo/ui/src/components/button/Button';

import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { Dispatch, SetStateAction } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';

interface RenderHeaderProps {
  headerKey: keyof pcListType;
  isOpenProgram: boolean;
  setIsOpenProgram: Dispatch<SetStateAction<boolean>>;
  refetchData: () => void;
  selectedPcs: pcListType[];
  setIsOpenCompare: Dispatch<SetStateAction<boolean>>;
}

export default function RenderHeader({
  headerKey,
  isOpenProgram,
  setIsOpenProgram,
  refetchData,
  selectedPcs,
  setIsOpenCompare,
}: RenderHeaderProps) {
  const t = useTranslations('pc');
  const tHMGMA = useTranslations('hmgma');
  const [, setToast] = useAtom(toastAtom);

  switch (headerKey) {
    case 'serialNumber':
      return (
        <div className='flex flex-wrap items-center'>
          <span>{t(`${headerKey}`)}</span>
          <HiOutlineSwitchVertical
            size={16}
            className='ml-1 mr-4 shrink-0 cursor-pointer'
            onClick={() => refetchData()}
          />
          <div>
            <Button
              value={tHMGMA('compare-modal-open-button')}
              onClick={() => {
                if (selectedPcs?.length > 1) setIsOpenCompare(true);
                else
                  setToast({
                    visible: true,
                    text: tHMGMA('error-compare-modal'),
                    icon: 'warn',
                  });
              }}
              style='outline'
              size='s'
            />
          </div>
        </div>
      );

    case 'pcPrograms':
      return (
        <div className='flex flex-wrap items-center justify-between'>
          <span>{t('program-name')}</span>
          <div>
            <Button
              value={tHMGMA('program-open-button', { state: String(isOpenProgram) })}
              onClick={() => setIsOpenProgram(!isOpenProgram)}
              style='outline'
              size='s'
            />
          </div>
        </div>
      );

    case '__typename':
    case 'id':
      return null;

    default:
      return (
        <div className='flex items-center gap-1'>
          <span>{t(`${headerKey}`)}</span>
          <HiOutlineSwitchVertical
            size={16}
            className='shrink-0 cursor-pointer'
            onClick={() => refetchData()}
          />
        </div>
      );
  }
}
