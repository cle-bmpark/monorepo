import ScrollNavigation from '@repo/ui/src/components/tab/ScrollNavigation';
import SegmentControl from '@repo/ui/src/components/tab/SegmentControl';
import Tab, { TabType } from '@repo/ui/src/components/tab/Tab';
import { useState } from 'react';

export default function TabView() {
  const valueList: TabType<string>[] = [
    { key: 1, value: 'Red' },
    { key: 2, value: 'Orange' },
    { key: 3, value: 'Yellow' },
    { key: 4, value: 'Green' },
    { key: 5, value: 'Blue' },
  ];
  const [value, setValue] = useState<TabType<string>>(valueList[0] ?? { key: 1, value: 'Red' });

  return (
    <div className='flex flex-col gap-4'>
      {/* Tab */}
      <h2>Tab</h2>
      <div className='border-grey-300 flex flex-col flex-wrap gap-4 rounded-s-lg border-1 p-4'>
        <div className='flex flex-1 justify-between gap-4'>
          <ScrollNavigation
            value={value}
            valueList={valueList}
            onClick={(item: TabType<string>) => setValue(item)}
          />
          <ScrollNavigation
            value={value}
            valueList={valueList}
            onClick={(item: TabType<string>) => setValue(item)}
            align='right'
          />
        </div>
        <div className='flex flex-1 gap-4'>
          <SegmentControl
            value={value}
            valueList={valueList}
            onClick={(item: TabType<string>) => setValue(item)}
          />
          <SegmentControl value={value} valueList={valueList} isDisabled />
        </div>
        <div className='flex flex-1 gap-4'>
          <SegmentControl
            value={value}
            valueList={valueList}
            onClick={(item: TabType<string>) => setValue(item)}
            isIcon
          />
          <SegmentControl value={value} valueList={valueList} isIcon isDisabled />
        </div>
        <div className='flex flex-1 gap-4'>
          <Tab
            value={value}
            valueList={valueList}
            onClick={(item: TabType<string>) => setValue(item)}
          />
        </div>
      </div>
    </div>
  );
}
