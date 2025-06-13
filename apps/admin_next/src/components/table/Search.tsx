import IconInput from '@repo/ui/src/components/input/IconInput';
import { useTranslations } from 'next-intl';
import { KeyboardEvent, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

interface SearchProps {
  search?: string | null;
  handleSearch: (value?: string) => void;
}

export default function Search({ search, handleSearch }: SearchProps) {
  const t = useTranslations('table');
  const [tempSearch, setTempSearch] = useState<string>(search ?? '');

  const handleKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(tempSearch);
    }
  };

  return (
    <div className='w-2xs'>
      <IconInput
        value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
        icon={<IoMdSearch onClick={() => handleSearch(tempSearch)} />}
        onKeyDown={handleKeyEnter}
        placeholder={t('search')}
        size='s'
      />
    </div>
  );
}
