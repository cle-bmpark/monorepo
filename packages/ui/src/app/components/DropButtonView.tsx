import { useState } from 'react';

import DropButton from '@ui/components/button/DropButton';
import Dropdown from '@ui/components/button/Dropdown';

export default function DropButtonView() {
  const valueList = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5', 'Option6'];
  const [value, setValue] = useState<string>(valueList[0] ?? 'Option1');

  return (
    <div className='flex flex-col gap-4'>
      {/* Drop Button */}
      <h2>Drop Button</h2>
      <div className='flex flex-1 flex-wrap justify-between gap-12 rounded-s-lg border-1 border-grey-300 p-4'>
        <div>
          <DropButton
            title='Button'
            value={value}
            valueList={valueList}
            onClick={(item: string) => setValue(item)}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Dropdown
            value={value}
            valueList={valueList}
            onClick={(item: string) => setValue(item)}
          />
          <Dropdown
            value={value}
            valueList={valueList}
            onClick={(item: string) => setValue(item)}
            style='blue'
          />
          <Dropdown
            value={value}
            valueList={valueList}
            onClick={(item: string) => setValue(item)}
            style='ghost'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <Dropdown
              value={value}
              valueList={valueList}
              onClick={(item: string) => setValue(item)}
              size='s'
            />
          </div>
          <div>
            <Dropdown
              value={value}
              valueList={valueList}
              onClick={(item: string) => setValue(item)}
              style='blue'
              size='s'
            />
          </div>
          <div>
            <Dropdown
              value={value}
              valueList={valueList}
              onClick={(item: string) => setValue(item)}
              style='ghost'
              size='s'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
