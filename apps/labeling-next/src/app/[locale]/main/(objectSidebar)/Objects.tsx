import { objectColors } from '@/contants/objectColors';
import { ImageFileObjectType } from '@/hooks/queries/image';
import Button from '@ui/components/button/Button';

interface ObjectsProps {
  data?: ImageFileObjectType[];
}

export default function Objects({ data }: ObjectsProps) {
  const onClick = () => {
    return;
  };

  return (
    <div className='flex flex-1 flex-col gap-2'>
      {/* header */}
      <div className='flex items-center justify-between'>
        <h2>Objects</h2>
        <div>
          <Button value='Add Object' onClick={onClick} style='secondary' size='s' />
        </div>
      </div>

      {/* table */}
      <div className='flex max-h-[calc(100vh-560px)] flex-1 flex-col overflow-y-auto'>
        <table>
          <thead className='font-700 text-14'>
            <tr>
              <td className='border border-gray-400 p-2'>Color</td>
              <td className='border border-gray-400 p-2'>ID</td>
              <td className='border border-gray-400 p-2'>Marker Count</td>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr key={item.object_id} className='hover:bg-grey-100 cursor-pointer'>
                <td
                  className='border border-gray-400 p-2'
                  style={{
                    backgroundColor: objectColors[(item.object_id - 1) % objectColors.length],
                  }}
                />
                <td className='border border-gray-400 p-2'>{item.object_id}</td>
                <td className='border border-gray-400 p-2'>{item.markers.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
