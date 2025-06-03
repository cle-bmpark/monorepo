import IconInput from '@repo/ui/src/components/input/IconInput';
import { useTranslations } from 'next-intl';
import { KeyboardEvent, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

interface SearchProps {
  refetchData: (value?: string) => void;
}

export default function Search({ refetchData }: SearchProps) {
  const t = useTranslations('table');
  const [search, setSearch] = useState<string>('');

  const handleKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      refetchData();
    }
  };

  return (
    <div className='w-2xs'>
      <IconInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IoMdSearch onClick={() => refetchData(search)} />}
        onKeyDown={handleKeyEnter}
        placeholder={t('search')}
        size='s'
      />
    </div>
  );
}
