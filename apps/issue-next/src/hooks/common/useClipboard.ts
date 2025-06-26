import { toastAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';

export default function useClipboard() {
  const t = useTranslations('modal');
  const [, setToast] = useAtom(toastAtom);

  const copyToClipboard = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({
        visible: true,
        text: t('clipboard-success', { key }),
        icon: 'check',
        style: 'dark',
        width: 'w-80',
      });
    } catch {
      setToast({
        visible: true,
        text: t('clipboard-error', { key }),
        icon: 'check',
        style: 'dark',
        width: 'w-80',
      });
    }
  };

  return copyToClipboard;
}
