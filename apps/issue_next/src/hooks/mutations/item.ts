import { popupAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { InputType as setItemInputType } from '@/app/[locale]/(public)/main/[status]/Request';
import { useCreateItemMutation } from '@/graphql/generated/graphql';

export const useCreateItem = () => {
  const t = useTranslations('request');
  const router = useRouter();

  const [, setPopup] = useAtom(popupAtom);
  const [setItem, { loading }] = useCreateItemMutation();

  const mutationCreateItem = async (input: setItemInputType) => {
    const columnValues = {
      long_text: input.description,
      text8: input.requestorName,
      email_mks315kt: {
        email: input.requestorEmail,
        text: input.requestorEmail,
      },
      phone_mks3nwx7: {
        phone: input.requestorPhone,
        countryShortName: input.countryShortName,
      },
    };

    try {
      const response = await setItem({
        variables: {
          boardId: process.env.NEXT_PUBLIC_ISSUE_BOARD,
          itemName: input.itemName,
          columnValues: JSON.stringify(columnValues),
        },
      });
      setPopup({
        visible: true,
        title: t('successPopupTitle'),
        content: t('successPopupContent'),
        width: 'w-2/3',
        onConfirm: () => {
          router.push(`/result/id/${response.data?.create_item?.id}`);
        },
      });
    } catch (error) {
      setPopup({
        visible: true,
        title: t('failPopupTitle'),
        content: `${t('failPopupContent')}\n${String(error)}`,
        width: 'w-2/3',
      });
    }
  };

  return { mutationCreateItem, loading };
};
