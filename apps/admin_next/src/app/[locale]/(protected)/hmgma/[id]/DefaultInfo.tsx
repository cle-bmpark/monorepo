import { ReactNode } from 'react';

import Button from '@repo/ui/src/components/button/Button';
import LinkButton from '@repo/ui/src/components/button/LinkButton';
import CheckBox from '@repo/ui/src/components/radio/CheckBox';
import { popupAtom, toastAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';

import ObjectTable from '@/components/table/ObjectTable';
import useClipboard from '@/hooks/useClipboard';

interface DefaultInfoDataType {
  line?: string;
  process?: string;
  position?: string;
  brain?: string;
  anydeskIp?: string;
  ipv4?: string;
  isLicense?: boolean;
  isNetwork?: boolean;
  isProgram?: boolean;
  launcherUpdatedAt?: string;
}

interface DefaultInfoProps {
  data: DefaultInfoDataType;
}

export default function DefaultInfo({ data }: DefaultInfoProps) {
  const t = useTranslations('pc');
  const tHMGMA = useTranslations('hmgma');

  const copyToClipboard = useClipboard();
  const [, setPopup] = useAtom(popupAtom);
  const [, setToast] = useAtom(toastAtom);

  const renderKey = (key: keyof typeof data): ReactNode => t(`${key}`);
  const renderValue = (
    key: keyof typeof data,
    value: (typeof data)[keyof typeof data],
  ): ReactNode => {
    if (value === undefined) return null;

    switch (key) {
      case 'anydeskIp':
        return (
          <LinkButton
            value={value.toString()}
            onClick={() => {
              void copyToClipboard(t('anydeskIp'), value.toString());
              window.location.href = `anydesk:${value}`;
            }}
          />
        );

      case 'ipv4':
        return (
          <LinkButton
            value={value.toString()}
            onClick={() => {
              void copyToClipboard(t('ipv4'), value.toString());
            }}
          />
        );

      case 'isLicense':
        return (
          <CheckBox
            isCheck={Boolean(value)}
            onClick={() =>
              setPopup({
                visible: true,
                title: tHMGMA('license-popup-title'),
                content: tHMGMA('license-popup-content', { state: value.toString() }),
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
      case 'isProgram':
        return (
          <p
            className={`flex h-full flex-1 items-center p-2 ${Boolean(value) === false && 'bg-primary-100 text-primary-600'}`}
          >
            {tHMGMA('on&off', { state: value.toString() })}
          </p>
        );

      case 'launcherUpdatedAt':
        return (
          <div className='flex flex-col gap-1'>
            <p>{value.toString()}</p>
            <Button
              value={tHMGMA('update-button')}
              size='s'
              onClick={() => {
                setToast({
                  visible: true,
                  text: tHMGMA('feature-unavailable', { feature: 'Launcher Update' }),
                  icon: 'check',
                  style: 'dark',
                });
              }}
            />
          </div>
        );

      default:
        return value.toString();
    }
  };

  return (
    <ObjectTable
      title={tHMGMA('default-information')}
      data={data}
      renderKey={renderKey}
      renderValue={renderValue}
    />
  );
}
