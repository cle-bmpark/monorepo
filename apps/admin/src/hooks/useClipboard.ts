import { toastAtom } from '@/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';

export default function useClipboard() {
  const tHMGMA = useTranslations('hmgma');
  const [, setToast] = useAtom(toastAtom);

  const copyToClipboard = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({
        visible: true,
        text: tHMGMA('clipboard-success', { key }),
        icon: 'check',
        style: 'dark',
      });
    } catch {
      setToast({
        visible: true,
        text: tHMGMA('clipboard-error', { key }),
        icon: 'check',
        style: 'dark',
      });
    }
  };

  return copyToClipboard;
}
