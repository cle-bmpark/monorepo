'use client';

import Header from '@/app/[locale]/(pages)/main/Header';

import Table from '@/app/[locale]/(pages)/main/Table';
import { projectList } from '@/dummies/ProjectList';

export default function Page() {
  const data = projectList;

  return (
    <div className='flex w-screen flex-1 flex-col gap-4 px-10 pb-4 pt-10'>
      <Header data={data} />
      <Table data={data} />
    </div>
  );
}
