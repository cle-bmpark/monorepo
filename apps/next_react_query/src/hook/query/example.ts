import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';
import { popupAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const queryKeys = createQueryKeyStore({
  main: {
    title: (value: string) => [{ value }],
  },
});

interface mainType {
  title: string;
  content: string;
}

export const useImageFoldersQuery = () => {
  const [, setPopup] = useAtom(popupAtom);
  const t = useTranslations('modal');

  const { error, data, refetch } = useQuery<mainType[]>({
    queryKey: [queryKeys.main],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/image_folders`).then((res) => res.json()),
  });

  useEffect(() => {
    if (error) {
      setPopup({
        visible: true,
        title: 'Error',
        content: error?.message,
        confirmLabel: t('refetchLabel'),
        onConfirm: () => {
          void refetch();
        },
        onCancel: () => {
          return;
        },
      });
    }
  }, [error, refetch, setPopup, t]);

  return { data };
};
