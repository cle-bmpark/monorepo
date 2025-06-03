'use client';

import BadgeView from '@repo/ui/src/app/components/BadgeView';
import ButtonView from '@repo/ui/src/app/components/ButtonView';
import CalendarView from '@repo/ui/src/app/components/CalendarView';
import CardRadioView from '@repo/ui/src/app/components/CardRadioView';
import DropButtonView from '@repo/ui/src/app/components/DropButtonView';
import InputSmallView from '@repo/ui/src/app/components/InputSmallView';
import InputView from '@repo/ui/src/app/components/InputView';
import LabelView from '@repo/ui/src/app/components/LabelView';
import LinkButtonView from '@repo/ui/src/app/components/LinkButtonView';
import ModalView from '@repo/ui/src/app/components/ModalView';
import RadioView from '@repo/ui/src/app/components/RadioView';
import SliderView from '@repo/ui/src/app/components/SliderView';
import TableView from '@repo/ui/src/app/components/TableView';
import TabView from '@repo/ui/src/app/components/TabView';
import TextFieldView from '@repo/ui/src/app/components/TextFieldView';
import ToggleView from '@repo/ui/src/app/components/ToggleView';

export default function Components() {
  return (
    <div className='flex flex-col gap-8'>
      <h1>Design System Components</h1>
      <div className='flex flex-col gap-8'>
        <InputView />
        <InputSmallView />
        <TextFieldView />
        <LabelView />
        <SliderView />
        <ButtonView />
        <LinkButtonView />
        <RadioView />
        <ToggleView />
        <CardRadioView />
        <TabView />
        <DropButtonView />
        <CalendarView />
        <TableView />
        <ModalView />
        <BadgeView />
      </div>
    </div>
  );
}
