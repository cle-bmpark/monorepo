import ThemeMode from '@repo/ui/src/app/ThemeMode';
import Button from '@ui/components/button/Button';

export default function Header() {
  const onClick = () => {
    return;
  };

  return (
    <div className='border-grey-500 flex justify-between border-b p-4'>
      <div className='flex items-center gap-4'>
        <h1>SAM Annotation Tool</h1>
        <div>
          <Button value='Select Folder' onClick={onClick} style='secondary' size='s' />
        </div>
      </div>

      <div className='flex items-center justify-end gap-4'>
        {/* <LanguageSwitch /> */}
        <ThemeMode />
      </div>
    </div>
  );
}
