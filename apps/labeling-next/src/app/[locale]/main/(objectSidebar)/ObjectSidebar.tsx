import KeyList from '@/app/[locale]/main/(objectSidebar)/KeyList';
import Objects from '@/app/[locale]/main/(objectSidebar)/Objects';
import { ImageFileObjectType } from '@/hooks/queries/image';

interface SidebarProps {
  data?: ImageFileObjectType[];
}

export default function Sidebar({ data }: SidebarProps) {
  return (
    <div className='border-grey-500 flex flex-col gap-4 border-r p-4'>
      <KeyList />
      <Objects data={data} />
    </div>
  );
}
