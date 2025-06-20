'use client';

import { useCreateItem } from '@/hooks/mutations/item';
import { isValidEmail } from '@/utils/validation';
import Button from '@ui/components/button/Button';
import Dropdown from '@ui/components/button/Dropdown';
import Input from '@ui/components/input/Input';
import Label from '@ui/components/label/Label';
import TextField from '@ui/components/text-field/TextField';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export interface InputType {
  itemName: string;
  description: string;
  requestorName: string;
  requestorEmail: string;
  requestorPhone: string;
  countryShortName: string;
}

export default function Request() {
  const t = useTranslations('request');
  const minLength = {
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
      input.itemName.length > minLength.itemName - 1 &&
      input.description.length > minLength.description - 1 &&
      input.requestorName.length > minLength.requestorName - 1 &&
      input.requestorEmail.length > minLength.requestorEmail - 1 &&
      isValidEmail(input.requestorEmail)
    ) {
      await mutationCreateItem(input);
    }
  };

  return (
    <div className='bg-grey-50 flex flex-col p-4'>
      <div
        className='mb-8 flex flex-col gap-4 overflow-y-auto'
        style={{ maxHeight: `calc(100vh - 200px)` }}
      >
        <div className='flex flex-col gap-2'>
          <Label title={t('itemName')} isMark />
          <Input
            value={input.itemName}
            onChange={(e) => setInput((prev) => ({ ...prev, itemName: e.target.value }))}
            isError={isClick && input.itemName.length < minLength.itemName}
            errorMessage={t('ErrorMessage', { minLength: minLength.itemName.toString() })}
            placeholder={t('itemNamePlaceholder')}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label title={t('description')} isMark />
          <TextField
            value={input.description}
            onChange={(e) => setInput((prev) => ({ ...prev, description: e.target.value }))}
            isError={isClick && input.description.length < minLength.description}
            errorMessage={t('ErrorMessage', { minLength: minLength.description.toString() })}
            placeholder={t('descriptionPlaceholder')}
            maxLength={2000}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label title={t('requestorName')} isMark />
          <Input
            value={input.requestorName}
            onChange={(e) => setInput((prev) => ({ ...prev, requestorName: e.target.value }))}
            isError={isClick && input.requestorName.length < minLength.requestorName}
            errorMessage={t('ErrorMessage', { minLength: minLength.requestorName.toString() })}
            placeholder={t('requestorNamePlaceholder')}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label title={t('requestorEmail')} isMark />
          <Input
            value={input.requestorEmail}
            onChange={(e) => setInput((prev) => ({ ...prev, requestorEmail: e.target.value }))}
            isError={
              isClick &&
              (input.requestorEmail.length < minLength.requestorEmail ||
                !isValidEmail(input.requestorEmail))
            }
            errorMessage={t('emailErrorMessage')}
            placeholder={t('requestorEmailPlaceholder')}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <Label title={t('requestorPhone')} />
          </div>
          <div className='flex gap-1'>
            <div className='w-20'>
              <Dropdown
                value={input.countryShortName}
                valueList={['KR', 'US']}
                onClick={(value: string) =>
                  setInput((prev) => ({ ...prev, countryShortName: value }))
                }
              />
            </div>
            <div className='flex-1'>
              <Input
                value={input.requestorPhone}
                onChange={(e) => setInput((prev) => ({ ...prev, requestorPhone: e.target.value }))}
                placeholder={t('requestorPhonePlaceholder')}
                type='number'
              />
            </div>
          </div>
        </div>
      </div>

      <Button value={t('submit')} style='secondary' onClick={onClick} isLoading={loading} />

      <p className='text-12 text-grey-800'>
        <span>{t('kakaoDescription1')}</span>
        <Link href={'https://pf.kakao.com/_UxcKan'}>
          <span className='text-primary-600'>&nbsp;CLE&nbsp;</span>
        </Link>
        <span>{t('kakaoDescription2')}</span>
      </p>
    </div>
  );
}
