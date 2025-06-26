import Image from 'next/image';

import CleCol from '../../../public/cle-col.svg';

export default function Footer() {
  return (
    <div className='flex justify-between'>
      <p className='text-12 text-grey-500 text-ellipsis'>© 2025. CLE Inc. All rights reserved.</p>
      <Image width={120} alt='Cle logo' src={CleCol as string} />
    </div>
  );
}
