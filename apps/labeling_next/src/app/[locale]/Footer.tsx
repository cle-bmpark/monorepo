'use client';

import LinkButton from '@ui/components/button/LinkButton';
import { popupAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { IoMdPerson } from 'react-icons/io';

import CleCol from '@ui/../public/images/cle_col.svg';

export default function Footer() {
  const [, setPopup] = useAtom(popupAtom);

  return (
    <div className='flex flex-1 items-center justify-end gap-8 px-8 py-4'>
      <div className='flex flex-col items-end gap-1'>
        <LinkButton
          value='About authors'
          iconPosition='left'
          icon={<IoMdPerson />}
          onClick={() =>
            setPopup({
              visible: true,
              title: '[CLE] Labeling Program',
              content: `[Front-End] 박보민 bmpark@cle.vision\n[Back-End] 강재석 jskang@cle.vision`,
            })
          }
        />
        <p className='text-14 leading-20 text-grey-500 text-ellipsis'>
          © 2025. CLE Inc. All rights reserved.
        </p>
      </div>
      <Image width={230} height={48} alt='Cle logo' src={CleCol as string} />
    </div>
  );
}
