import { PcSortField, SortOrder } from '@/graphql/generated/graphql';
import { pcListType } from '@/types/graphql';
import Button from '@repo/ui/src/components/button/Button';
import { toastAtom } from '@ui/jotai/modalAtoms';

import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { Dispatch, SetStateAction } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';

interface RenderHeaderProps {
  headerKey: keyof pcListType;
  isOpenProgram: boolean;
  setIsOpenProgram: Dispatch<SetStateAction<boolean>>;
  selectedPcs: pcListType[];
  setIsOpenCompare: Dispatch<SetStateAction<boolean>>;
  order: {
    orderBy?: PcSortField;
    sortOrder?: SortOrder;
  };
  setOrder: Dispatch<
    SetStateAction<{
      orderBy?: PcSortField;
      sortOrder?: SortOrder;
    }>
  >;
}

const headerKeySort: Partial<Record<keyof pcListType, PcSortField>> = {
  __typename: PcSortField.IsProgram,
  id: PcSortField.IsProgram,
  serialNumber: PcSortField.SerialNumber,
  line: PcSortField.LineId,
  position: PcSortField.PositionId,
  process: PcSortField.ProcessId,
  brain: PcSortField.Brain,
  isLicense: PcSortField.IsLicense,
  isNetwork: PcSortField.IsNetwork,
  isProgram: PcSortField.IsProgram,
  anydeskIp: PcSortField.AnydeskIp,
  launcherUpdatedAt: PcSortField.LauncherUpdatedAt,
  pcPrograms: PcSortField.IsProgram,
};

export default function RenderHeader({
  headerKey,
  isOpenProgram,
  setIsOpenProgram,
  selectedPcs,
  setIsOpenCompare,
  order,
  setOrder,
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
            onClick={() =>
              setOrder({
                orderBy: PcSortField.SerialNumber,
                sortOrder: order.sortOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc,
              })
            }
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
            onClick={() =>
              setOrder({
                orderBy: headerKeySort[headerKey],
                sortOrder: order.sortOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc,
              })
            }
          />
        </div>
      );
  }
}
