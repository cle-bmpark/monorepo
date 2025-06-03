import Button from '@repo/ui/src/components/button/Button';
import Tooltip from '@repo/ui/src/components/modal/Tooltip';
import ModalViewContent from '@repo/ui/src/dummy/ModalViewContent';
import {
  modalAtom,
  modalDefault,
  popupAtom,
  popupDefault,
  progressAtom,
  progressDefault,
  toastAtom,
} from '@repo/ui/src/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useState } from 'react';

export default function ModalView() {
  const [, setModal] = useAtom(modalAtom);
  const [, setPopup] = useAtom(popupAtom);
  const [, setProgress] = useAtom(progressAtom);
  const [, setToast] = useAtom(toastAtom);
  const [isTooltip1, setIsTooltip1] = useState<boolean>(false);
  const [isTooltip2, setIsTooltip2] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-4'>
      {/* Modal */}
      <h2> Modal </h2>
      <div className='border-grey-300 flex flex-col gap-4 rounded-s-lg border-1 p-4'>
        <div className='flex flex-wrap gap-12'>
          <Button
            value='Popup (One Button)'
            onClick={() => setPopup({ visible: true, title: 'Title', content: 'Description' })}
          />
          <Button
            value='Popup (Two Button)'
            onClick={() =>
              setPopup({
                visible: true,
                title: 'Title',
                content: 'Description',
                onCancel: () => setPopup(popupDefault),
              })
            }
          />
        </div>
        <div className='flex flex-wrap gap-12'>
          <Button
            value='Modal (One Button)'
            onClick={() =>
              setModal({
                visible: true,
                title: 'Title',
                content: ModalViewContent(),
              })
            }
            style='outline'
          />
          <Button
            value='Modal (Two Button)'
            onClick={() =>
              setModal({
                visible: true,
                title: 'Title',
                content: ModalViewContent(),
                onCancel: () => setModal(modalDefault),
              })
            }
            style='outline'
          />
        </div>
        <div className='flex flex-wrap gap-12'>
          <Button
            value='Toast (Dark, Check)'
            onClick={() => {
              setToast({
                visible: true,
                text: 'Text',
              });
            }}
            style='secondary'
          />
          <Button
            value='Toast (Dark, Warn)'
            onClick={() => {
              setToast({
                visible: true,
                text: 'Text',
                icon: 'warn',
              });
            }}
            style='secondary'
          />
          <Button
            value='Toast (Dark, Info)'
            onClick={() => {
              setToast({
                visible: true,
                text: 'Text',
                icon: 'info',
              });
            }}
            style='secondary'
          />
          <Button
            value='Toast (Light, Check)'
            onClick={() => {
              setToast({
                visible: true,
                text: 'Text',
                style: 'light',
              });
            }}
            style='secondary'
          />
          <Button
            value='Toast (Light, Warn)'
            onClick={() => {
              setToast({
                visible: true,
                text: 'Text',
                icon: 'info',
                style: 'light',
              });
            }}
            style='secondary'
          />
          <Button
            value='Toast (Light, Info)'
            onClick={() => {
              setToast({
                visible: true,
                text: 'Text',
                icon: 'info',
                style: 'light',
              });
            }}
            style='secondary'
          />
        </div>
        <div className='flex flex-wrap gap-12'>
          <div className='relative flex flex-1 justify-center'>
            <Button
              value='Tooltip (Dark)'
              onClick={() => setIsTooltip1(!isTooltip1)}
              style='tertiary'
            />
            {isTooltip1 && (
              <div className='absolute bottom-13'>
                <Tooltip title='Title' detail='Detail' />
              </div>
            )}
          </div>
          <div className='relative flex flex-1 justify-center'>
            <Button
              value='Tooltip (Light)'
              onClick={() => setIsTooltip2(!isTooltip2)}
              style='tertiary'
            />
            {isTooltip2 && (
              <div className='absolute bottom-13'>
                <Tooltip title='Title' detail='Detail' style='light' />
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-wrap gap-12'>
          <Button
            value='ProgressModal (One Button)'
            onClick={() =>
              setProgress({
                visible: true,
                title: 'Title',
                count: 1,
                total: 30,
              })
            }
          />
          <Button
            value='ProgressModal (Two Button)'
            onClick={() =>
              setProgress({
                visible: true,
                title: 'Title',
                count: 10,
                total: 30,
                handleSecondary: () => setProgress(progressDefault),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
