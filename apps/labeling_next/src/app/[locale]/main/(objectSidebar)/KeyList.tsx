export default function KeyList() {
  const keys: { key: string; action: string }[] = [
    { key: 'W', action: 'Add Object' },
    { key: 'R', action: 'Reset Object' },
    { key: 'Shitf + R', action: 'Reset All' },
    { key: 'Q', action: 'Previous Object' },
    { key: 'E', action: 'Next Object' },
    { key: 'A', action: 'Previous Image' },
    { key: 'D', action: 'Next Image' },
    { key: 'S', action: 'Delete Last Marker/Object' },
  ];

  return (
    <div className='flex flex-col gap-2'>
      <h2>Shortcut Key List</h2>
      <table className='text-12'>
        <tbody>
          {keys.map((item) => (
            <tr key={item.key}>
              <td className='font-700 text-grey-900 border border-gray-400 p-1'>{item.key}</td>
              <td className='border border-gray-400 p-1'>{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
