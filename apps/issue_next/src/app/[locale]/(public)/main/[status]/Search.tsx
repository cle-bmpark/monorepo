'use client';

import { ChangeEvent, ChangeEventHandler, useState } from 'react';

import Button from '@ui/components/button/Button';
import Input from '@ui/components/input/Input';
import Label from '@ui/components/label/Label';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { isValidEmail } from '@/utils/validation';

export interface InputType {
  id: string;
  email: string;
  phone: string;
}

type InputItemKeyType = 'id' | 'email' | 'phone';
interface InputItemsType {
  title: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
  style: 'default' | 'ghost';
  isError?: boolean;
  errorMessage?: string;
}

export default function Search() {
  const t = useTranslations('search');
  const requestT = useTranslations('request');
  const router = useRouter();

  const [input, setInput] = useState<InputType>({
    id: '',
    email: '',
    phone: '',
  });

  const INPUT_ITEMS: Record<InputItemKeyType, InputItemsType> = {
    id: {
      title: t('id'),
      value: input.id,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, id: e.target.value })),
      placeholder: '0123456789',
      type: 'text',
      style: input.email || input.phone ? 'ghost' : 'default',
    },
    email: {
      title: t('email'),
      value: input.email,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, email: e.target.value })),
      placeholder: requestT('requestorEmailPlaceholder'),
      type: 'text',
      style: input.id || input.phone ? 'ghost' : 'default',
      isError: input.email.length > 0 && !isValidEmail(input.email),
      errorMessage: requestT('emailErrorMessage'),
    },
    phone: {
      title: t('phone'),
      value: input.phone,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setInput((prev) => ({ ...prev, phone: e.target.value })),
      placeholder: requestT('requestorPhonePlaceholder'),
      type: 'number',
      style: input.id || input.email ? 'ghost' : 'default',
    },
  };
  const itemKeys = Object.keys(INPUT_ITEMS) as (keyof typeof INPUT_ITEMS)[];

  const onClick = () => {
    if (input.id) router.push(`/result/id?value=${input.id}`);
    else if (input.email) router.push(`/result/email?value=${encodeURIComponent(input.email)}`);
    else if (input.phone) router.push(`/result/phone?value=${input.phone}`);
  };

  return (
    <div className='flex flex-1 flex-col justify-between'>
      <div
        className='mb-8 flex flex-col gap-4 overflow-y-auto'
        style={{ maxHeight: `calc(100vh - 200px)` }}
      >
        {itemKeys.map((item) => (
          <div className='flex flex-col gap-2' key={item}>
            <Label title={INPUT_ITEMS[item].title} />
            <Input
              value={INPUT_ITEMS[item].value}
              onChange={(e) => setInput((prev) => ({ ...prev, [item]: e.target.value }))}
              placeholder={INPUT_ITEMS[item].placeholder}
              type={INPUT_ITEMS[item].type}
              style={INPUT_ITEMS[item].style}
              isError={INPUT_ITEMS[item].isError}
              errorMessage={INPUT_ITEMS[item].errorMessage}
            />
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-1'>
        <Button
          value={t('search')}
          style='secondary'
          onClick={onClick}
          isDisabled={
            !input.id &&
            (!input.email || (input.email.length > 0 && !isValidEmail(input.email))) &&
            !input.phone
          }
        />
        <p className='text-12 text-primary-600'>{t('helpText')}</p>
      </div>
    </div>
  );
}
