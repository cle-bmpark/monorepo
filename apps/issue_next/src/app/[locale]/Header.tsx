import ThemeMode from '@repo/ui/src/app/ThemeMode';
import LanguageSwitch from './LanguageSwitch';

export default function Header() {
  return (
    <div className='flex items-center justify-between'>
      <LanguageSwitch />
      <ThemeMode />
    </div>
  );
}
