import { useGetPetById } from '@/api/generated/pet/pet';
import Button from '@ui/components/button/Button';
import Input from '@ui/components/input/Input';
import { useState } from 'react';

export default function Pet() {
  const [petId, setPetId] = useState<string>('');
  const { data } = useGetPetById(Number(petId));

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <h3 className='text-blue-500'>[GET]</h3>
        <h3>{`/pet/{petId}`}</h3>
      </div>
      <div className='flex gap-2'>
        <h3 className='text-grey-700 mt-1'>Pet ID</h3>
        <Input value={petId} onChange={(e) => setPetId(e.target.value)} size='s' type='number' />
        <div>
          <Button value='Execute' size='s' style='secondary' />
        </div>
        <div>
          <Button value='Clear' onClick={() => setPetId('')} size='s' style='tertiary' />
        </div>
      </div>
      <h4>Result</h4>
      <div className='bg-grey-0 text-12 border-grey-600 flex rounded-md border p-2'>
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  );
}
