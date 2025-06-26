'use client';

import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute, useState } from 'react';

import Button from '@ui/components/button/Button';
import Dropdown from '@ui/components/button/Dropdown';
import Input from '@ui/components/input/Input';
import Label from '@ui/components/label/Label';
import TextField from '@ui/components/text-field/TextField';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { useCreateItem } from '@/hooks/mutations/item';
import { isValidEmail } from '@/utils/validation';

export interface InputType {
  itemName: string;
  description: string;
  requestorName: string;
  requestorEmail: string;
  requestorPhone: string;
  countryShortName: string;
}

type InputItemKeyType =
  | 'itemName'
  | 'description'
  | 'requestorName'
  | 'requestorEmail'
  | 'requestorPhone';
interface InputItemsType {
  title: string;
  isMark: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  isError?: boolean;
  errorMessage?: string;
  placeholder: string;
  maxLength?: number;
  type?: HTMLInputTypeAttribute;
}

export default function Request() {
  const t = useTranslations('request');
  const MIN_LENGTH = {
    itemName: 5,
    description: 10,
    requestorName: 2,
    requestorEmail: 5,
  };
  const { mutationCreateItem, loading } = useCreateItem();

  const [input, setInput] = useState<InputType>({
    itemName: '',
    description: '',
    requestorName: '',
    requestorEmail: '',
    requestorPhone: '',
    countryShortName: 'KR',
  });
  const [isClick, setIsClick] = useState<boolean>(false);

  const onClick = async () => {
    setIsClick(true);

    if (
      input.itemName.length >= MIN_LENGTH.itemName &&
      input.description.length >= MIN_LENGTH.description &&
      input.requestorName.length >= MIN_LENGTH.requestorName &&
      input.requestorEmail.length >= MIN_LENGTH.requestorEmail &&
      isValidEmail(input.requestorEmail)
    ) {
      await mutationCreateItem(input);
      setIsClick(false);
    }
  };

  const INPUT_ITEMS: Record<InputItemKeyType, InputItemsType> = {
    itemName: {
      title: t('itemName'),
      isMark: true,
      value: input.itemName,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, itemName: e.target.value })),
      isError: isClick && input.itemName.length < MIN_LENGTH.itemName,
      errorMessage: t('ErrorMessage', { minLength: MIN_LENGTH.itemName.toString() }),
      placeholder: t('itemNamePlaceholder'),
    },
    description: {
      title: t('description'),
      isMark: true,
      value: input.description,
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
        setInput((prev) => ({ ...prev, description: e.target.value })),
      isError: isClick && input.description.length < MIN_LENGTH.description,
      errorMessage: t('ErrorMessage', { minLength: MIN_LENGTH.description.toString() }),
      placeholder: t('descriptionPlaceholder'),
      maxLength: 2000,
    },
    requestorName: {
      title: t('requestorName'),
      isMark: true,
      value: input.requestorName,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, requestorName: e.target.value })),
      isError: isClick && input.requestorName.length < MIN_LENGTH.requestorName,
      errorMessage: t('ErrorMessage', { minLength: MIN_LENGTH.requestorName.toString() }),
      placeholder: t('requestorNamePlaceholder'),
    },
    requestorEmail: {
      title: t('requestorEmail'),
      isMark: true,
      value: input.requestorEmail,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, requestorEmail: e.target.value })),
      isError:
        isClick &&
        (input.requestorEmail.length < MIN_LENGTH.requestorEmail ||
          !isValidEmail(input.requestorEmail)),
      errorMessage: t('emailErrorMessage'),
      placeholder: t('requestorEmailPlaceholder'),
    },
    requestorPhone: {
      title: t('requestorPhone'),
      isMark: false,
      value: input.requestorPhone,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, requestorPhone: e.target.value })),
      placeholder: t('requestorPhonePlaceholder'),
      type: 'number',
    },
  };
  const itemKeys = Object.keys(INPUT_ITEMS) as (keyof typeof INPUT_ITEMS)[];

  return (
    <>
      <div
        className='mb-8 flex flex-col gap-4 overflow-y-auto'
        style={{ maxHeight: `calc(100vh - 200px)` }}
      >
        {itemKeys.map((item) => {
          switch (item) {
            case 'description':
              return (
                <div className='flex flex-col gap-2' key={item}>
                  <Label title={INPUT_ITEMS[item].title} isMark={INPUT_ITEMS[item].isMark} />
                  <TextField
                    value={INPUT_ITEMS[item].value}
                    onChange={INPUT_ITEMS[item].onChange}
                    isError={INPUT_ITEMS[item].isError}
                    errorMessage={INPUT_ITEMS[item].errorMessage}
                    placeholder={INPUT_ITEMS[item].placeholder}
                    maxLength={INPUT_ITEMS[item].maxLength}
                    isDisabled={loading}
                  />
                </div>
              );
            case 'requestorPhone':
              return (
                <div className='flex flex-col gap-2' key={item}>
                  <Label title={INPUT_ITEMS[item].title} isMark={INPUT_ITEMS[item].isMark} />
                  <div className='flex w-full min-w-0 gap-1'>
                    <div className='w-20 shrink-0'>
                      <Dropdown
                        value={input.countryShortName}
                        valueList={['KR', 'US']}
                        onClick={(value: string) =>
                          setInput((prev) => ({ ...prev, countryShortName: value }))
                        }
                      />
                    </div>
                    <div className='flex min-w-0'>
                      <Input
                        value={INPUT_ITEMS[item].value}
                        onChange={INPUT_ITEMS[item].onChange}
                        placeholder={INPUT_ITEMS[item].placeholder}
                        type={INPUT_ITEMS[item].type}
                        isDisabled={loading}
                      />
                    </div>
                  </div>
                </div>
              );
            default:
              return (
                <div className='flex flex-col gap-2' key={item}>
                  <Label title={INPUT_ITEMS[item].title} isMark={INPUT_ITEMS[item].isMark} />
                  <Input
                    value={INPUT_ITEMS[item].value}
                    onChange={INPUT_ITEMS[item].onChange}
                    isError={INPUT_ITEMS[item].isError}
                    errorMessage={INPUT_ITEMS[item].errorMessage}
                    placeholder={INPUT_ITEMS[item].placeholder}
                    isDisabled={loading}
                  />
                </div>
              );
          }
        })}
      </div>

      {/* 등록하기 버튼 */}
      <div className='flex flex-col gap-1'>
        <Button value={t('submit')} style='secondary' onClick={onClick} isLoading={loading} />

        <p className='text-12 text-grey-800'>
          <span>{t('kakaoDescription1')}</span>
          <Link href={'https://pf.kakao.com/_UxcKan'}>
            <span className='text-primary-600'>&nbsp;CLE&nbsp;</span>
          </Link>
          <span>{t('kakaoDescription2')}</span>
        </p>
      </div>
    </>
  );
}
