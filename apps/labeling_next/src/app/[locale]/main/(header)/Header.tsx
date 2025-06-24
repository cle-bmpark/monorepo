import { ImageFolderType } from '@/hook/query/image';
import ThemeMode from '@repo/ui/src/app/ThemeMode';
import Button from '@ui/components/button/Button';
import { modalAtom } from '@ui/jotai/modalAtoms';
import { SetStateAction, useAtom } from 'jotai';
import { Dispatch } from 'react';
import FolderSelector from './FolderSelector';

interface HeaderProps {
  selectedFolder?: ImageFolderType;
  setSelectedFolder: Dispatch<SetStateAction<ImageFolderType | undefined>>;
}

export default function Header({ selectedFolder, setSelectedFolder }: HeaderProps) {
  const [, setModal] = useAtom(modalAtom);

  const onClick = () => {
    setModal({
      visible: true,
      title: 'Select Folder',
      content: (
        <FolderSelector
          selectedFolder={selectedFolder}
          onClick={(value?: ImageFolderType) => {
            setSelectedFolder(value);
            setModal({ visible: false, title: '' });
          }}
        />
      ),
      confirmLabel: 'Close',
    });
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
