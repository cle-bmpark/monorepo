import Button from '@ui/components/button/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';

export default function NoData() {
  const t = useTranslations('result');
  const router = useRouter();

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4'>
      <p className='text-grey-800 text-center'>{t('noDataById')}</p>
      <div className='flex w-full'>
        <Button
          value={t('research')}
          onClick={() => router.push('/main/search')}
          style='secondary'
          isIcon
          icon={<IoSearch />}
        />
      </div>
    </div>
  );
}
