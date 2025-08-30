import { useState } from 'react';

import BackIconInput from '@ui/components/input/BackIconInput';
import DropInput from '@ui/components/input/DropInput';
import IconInput from '@ui/components/input/IconInput';
import Input from '@ui/components/input/Input';
import InputHide from '@ui/components/input/InputHide';
import LabeledInput from '@ui/components/input/LabeledInput';
import PasswordInput from '@ui/components/input/PasswordInput';
import SelectFileInput from '@ui/components/input/SelectFileInput';
import StepperInput from '@ui/components/input/StepperInput';
import UploadFile from '@ui/components/input/UploadFile';
import { AiOutlinePlus } from 'react-icons/ai';
import { PiFolder } from 'react-icons/pi';

export default function InputView() {
  const [inputValue, setInputValue] = useState<string>('');
  const [dropValue, setDropValue] = useState<string>('');
  const [stepperValue, setStepperValue] = useState<number>(0);

  return (
    <div className='flex flex-col gap-4'>
      {/* Text Input */}
      <h2>Text Input</h2>
      <div className='flex flex-wrap gap-4 rounded-s-lg border-1 border-grey-300 p-4'>
        <div className='flex min-w-60 flex-col gap-4'>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} isDisabled />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isError
            errorMessage='Error Message'
          />
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} style='ghost' />
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} style='blue' />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            isError
            errorMessage='Error Message'
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            isDisabled
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            style='ghost'
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            style='blue'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            isDisabled
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            isError
            errorMessage='Error Message'
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            style='ghost'
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            style='blue'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <PasswordInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isDisabled
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isError
            errorMessage='Error Message'
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='ghost'
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='blue'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <UploadFile />
          <UploadFile isDisabled />
          <UploadFile isError errorMessage='Error Message' />
          <UploadFile isUploading />
          <UploadFile style='blue' />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            isDisabled
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            isError
            errorMessage='Error Message'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            style='ghost'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            style='blue'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            isDisabled
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            isError
            errorMessage='Error Message'
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            style='ghost'
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            style='blue'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            isError
            errorMessage='Error Message'
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            isDisabled
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            style='ghost'
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            style='blue'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <InputHide value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <InputHide
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='primary'
          />
        </div>
        <div className='flex min-w-60 flex-1 flex-col gap-4'>
          <SelectFileInput />
          <SelectFileInput isDisabled />
          <SelectFileInput isError errorMessage='Error Message' />
          <SelectFileInput style='ghost' />
          <SelectFileInput style='blue' />
        </div>
      </div>
    </div>
  );
}
