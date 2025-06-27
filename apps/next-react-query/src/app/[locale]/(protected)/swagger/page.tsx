'use client';

import Pet from '@/app/[locale]/(protected)/swagger/Pet';

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <h1>Swagger API</h1>
      <div className='flex flex-col gap-8'>
        <Pet />
      </div>
    </div>
  );
}
