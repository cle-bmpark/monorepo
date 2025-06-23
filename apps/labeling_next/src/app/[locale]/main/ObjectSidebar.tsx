import KeyList from '@/app/[locale]/main/KeyList';
import Objects from './Objects';

export default function Sidebar() {
  return (
    <div className='border-grey-500 flex flex-col gap-4 border-r p-4'>
      <KeyList />
      <Objects />
    </div>
  );
}
