import Button from '@ui/components/button/Button';

export default function Objects() {
  const dummy: { color: string; id: number; markerCount: number }[] = [
    { color: '#C8C8C8', id: 1, markerCount: 0 },
    { color: '#C8C8', id: 2, markerCount: 0 },
    { color: '#C8C8C8', id: 3, markerCount: 0 },
    { color: '#C8C8', id: 4, markerCount: 0 },
    { color: '#C8C8C8', id: 5, markerCount: 0 },
    { color: '#C8C8', id: 6, markerCount: 0 },
    { color: '#C8C8C8', id: 7, markerCount: 0 },
    { color: '#C8C8', id: 8, markerCount: 0 },
    { color: '#C8C8C8', id: 9, markerCount: 0 },
    { color: '#C8C8', id: 10, markerCount: 0 },
    { color: '#C8C8C8', id: 11, markerCount: 0 },
    { color: '#C8C8', id: 12, markerCount: 0 },
    { color: '#C8C8C8', id: 13, markerCount: 0 },
    { color: '#C8C8', id: 14, markerCount: 0 },
    { color: '#C8C8C8', id: 15, markerCount: 0 },
    { color: '#C8C8', id: 16, markerCount: 0 },
    { color: '#C8C8C8', id: 17, markerCount: 0 },
    { color: '#C8C8', id: 18, markerCount: 0 },
    { color: '#C8C8C8', id: 19, markerCount: 0 },
    { color: '#C8C8', id: 20, markerCount: 0 },
    { color: '#C8C8C8', id: 21, markerCount: 0 },
    { color: '#C8C8', id: 22, markerCount: 0 },
    { color: '#C8C8C8', id: 23, markerCount: 0 },
    { color: '#C8C8', id: 24, markerCount: 0 },
    { color: '#C8C8C8', id: 25, markerCount: 0 },
    { color: '#C8C8', id: 26, markerCount: 0 },
    { color: '#C8C8C8', id: 27, markerCount: 0 },
  ];

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
            <td className='border border-gray-400 p-2'>Color</td>
            <td className='border border-gray-400 p-2'>ID</td>
            <td className='border border-gray-400 p-2'>Marker Count</td>
          </thead>

          <tbody>
            {dummy.map((item) => (
              <tr key={item.id} className='hover:bg-grey-100 cursor-pointer'>
                <td
                  className='border border-gray-400 p-2'
                  style={{ backgroundColor: item.color }}
                />
                <td className='border border-gray-400 p-2'>{item.id}</td>
                <td className='border border-gray-400 p-2'>{item.markerCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
