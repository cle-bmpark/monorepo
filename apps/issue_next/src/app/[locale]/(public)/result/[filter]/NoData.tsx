import { useTranslations } from 'next-intl';

export default function NoData() {
  const t = useTranslations('result');

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4'>
      <p className='text-grey-800 text-center'>{t('noDataById')}</p>
    </div>
  );
}
