import LanguageSwitch from '@/app/[locale]/LanguageSwitch';

export default function Footer() {
  return (
    <div className='flex w-lvw flex-1 items-center justify-between px-12 pb-4 pt-2'>
      <p className='text-grey-500 text-medium-14'>© 2025. CLE Inc. All rights reserved.</p>

      <LanguageSwitch />
    </div>
  );
}
