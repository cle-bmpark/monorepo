import Slider from '@repo/ui/src/components/slider/Slider';
import { useState } from 'react';

export default function SliderView() {
  const [sliderValue, setSliderValue] = useState<number>(50);

  return (
    <div className='flex flex-col gap-4'>
      {/* Slider */}
      <h2>Slider</h2>
      <div className='border-grey-300 flex flex-wrap gap-10 rounded-s-lg border-1 p-10'>
        <Slider
          amount={sliderValue}
          total={100}
          onChange={(amount: number) => setSliderValue(amount)}
        />
        <Slider
          amount={sliderValue}
          total={100}
          onChange={(amount: number) => setSliderValue(amount)}
          isNumber
        />
        <Slider
          amount={sliderValue}
          total={100}
          onChange={(amount: number) => setSliderValue(amount)}
          isDisabled
        />
        <Slider
          amount={sliderValue}
          total={100}
          onChange={(amount: number) => setSliderValue(amount)}
          isNumber
          isDisabled
        />
      </div>
    </div>
  );
}
