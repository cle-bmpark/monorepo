'use client';

import DropButton from '@repo/ui/src/components/button/DropButton';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { MdLanguage } from 'react-icons/md';

export default function LanguageSwitch() {
  const t = useTranslations('root');
  const router = useRouter();
  const pathname = usePathname();
  const grey700 = useColorByTheme('grey-700');

  const locales = ['English', '한국어'];
  const currentLocale = useLocale() === 'en' ? 'English' : '한국어';

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale === 'English' ? 'en' : 'ko' });
  };

  return (
    <div className='flex items-center gap-1'>
      <MdLanguage color={grey700} size={16} />
      <DropButton
        title={t('language-switch')}
        value={currentLocale}
        valueList={locales}
        onClick={handleLocaleChange}
        size='s'
      />
    </div>
  );
}
