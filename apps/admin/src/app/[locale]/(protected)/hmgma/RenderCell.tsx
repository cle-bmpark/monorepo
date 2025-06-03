import ProgramAccordion from '@/app/[locale]/(protected)/hmgma/ProgramAccordion';
import { enumColors, listType } from '@/dummy/HMGMA';
import useClipboard from '@/hooks/useClipboard';
import { popupAtom, toastAtom } from '@/jotai/modalAtoms';
import Badge from '@repo/ui/src/components/badge/Badge';
import Button from '@repo/ui/src/components/button/Button';
import LinkButton from '@repo/ui/src/components/button/LinkButton';
import CheckBox from '@repo/ui/src/components/radio/CheckBox';
import { SetStateAction, useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Dispatch } from 'react';
import { IoWarning } from 'react-icons/io5';

interface RenderCellProps {
  row: listType;
  rowKey: keyof listType;
  isOpenProgram: boolean;
  serialNumbers: string[];
  setSerialNumbers: Dispatch<SetStateAction<string[]>>;
}

export default function RenderCell({
  row,
  rowKey,
  isOpenProgram,
  serialNumbers,
  setSerialNumbers,
}: RenderCellProps) {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const router = useRouter();

  const copyToClipboard = useClipboard();

  const [, setPopup] = useAtom(popupAtom);
  const [, setToast] = useAtom(toastAtom);

  switch (rowKey) {
    case 'serialNumber':
      return (
        <div className='flex items-center gap-2'>
          <CheckBox
            isCheck={serialNumbers.includes(row[rowKey])}
            onClick={() =>
              setSerialNumbers((prev) =>
                prev.includes(row[rowKey])
                  ? prev.filter((item) => item !== row[rowKey])
                  : [...prev, row[rowKey]],
              )
            }
          />
          <LinkButton
            value={row[rowKey].toString()}
            onClick={() => {
              router.push(`/hmgma/${row[rowKey]}`);
            }}
          />
        </div>
      );

    case 'line':
    case 'process':
    case 'position':
    case 'pc':
      return <Badge value={row[rowKey].toString()} color={enumColors[row[rowKey].toString()]} />;

    case 'isLicense':
      return (
        <CheckBox
          isCheck={row[rowKey]}
          onClick={() =>
            setPopup({
              visible: true,
              title: tHMGMA('license-popup-title'),
              content: tHMGMA('license-popup-content', { state: row[rowKey].toString() }),
              onCancel: () => {
                return;
              },
              onConfirm: () =>
                setToast({
                  visible: true,
                  text: tHMGMA('feature-unavailable', { feature: 'License' }),
                  icon: 'warn',
                }),
              cancelLabel: tHMGMA('no'),
              confirmLabel: tHMGMA('yes'),
            })
          }
          style='primary500'
        />
      );

    case 'isNetwork':
      return (
        <p
          className={`flex h-full flex-1 items-center p-2 ${row[rowKey] === false && 'text-primary-600'}`}
        >
          {tHMGMA('on&off', { state: row[rowKey].toString() })}
        </p>
      );

    case 'isProgram':
      return (
        <div
          className={`flex h-full flex-1 items-center gap-1 p-2 ${row[rowKey] === false && 'bg-primary-500 text-grey-0'}`}
        >
          {!row[rowKey] && <IoWarning className='animate-pulse' />}
          <p>{tHMGMA('on&off', { state: row[rowKey].toString() })}</p>
        </div>
      );

    case 'anyDeskIP':
      return (
        <LinkButton
          value={row[rowKey].toString()}
          onClick={() => {
            void copyToClipboard(t('anyDeskIP'), row[rowKey].toString());
            window.location.href = `anydesk:${row[rowKey]}`;
          }}
        />
      );

    case 'launcherUpdateAt':
      return (
        <div className='flex flex-col gap-1'>
          <p>{row[rowKey].toString()}</p>
          <Button
            value={tHMGMA('update-button')}
            size='s'
            onClick={() => {
              setToast({
                visible: true,
                text: tHMGMA('feature-unavailable', { feature: 'Launcher Update' }),
                icon: 'warn',
              });
            }}
          />
        </div>
      );

    case 'program':
      return <ProgramAccordion list={row[rowKey]} isAllOpen={isOpenProgram} />;
  }
}
