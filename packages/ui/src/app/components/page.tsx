'use client';

import BadgeView from '@ui/app/components/BadgeView';
import ButtonView from '@ui/app/components/ButtonView';
import CalendarView from '@ui/app/components/CalendarView';
import CardRadioView from '@ui/app/components/CardRadioView';
import DropButtonView from '@ui/app/components/DropButtonView';
import InputSmallView from '@ui/app/components/InputSmallView';
import InputView from '@ui/app/components/InputView';
import LabelView from '@ui/app/components/LabelView';
import LinkButtonView from '@ui/app/components/LinkButtonView';
import ModalView from '@ui/app/components/ModalView';
import RadioView from '@ui/app/components/RadioView';
import SliderView from '@ui/app/components/SliderView';
import TabView from '@ui/app/components/TabView';
import TableView from '@ui/app/components/TableView';
import TextFieldView from '@ui/app/components/TextFieldView';
import ToggleView from '@ui/app/components/ToggleView';

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
