import { ReactElement } from 'react';

import { atom } from 'jotai';

interface defaultType {
  visible: boolean;
  title: string;
  width?: string;
}

interface modalType extends defaultType {
  content?: ReactElement;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
  height?: string;
}
export const modalDefault: modalType = {
  visible: false,
  title: '',
};
export const modalAtom = atom<modalType>(modalDefault);

interface popupType extends defaultType {
  content: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}
export const popupDefault: popupType = {
  visible: false,
  title: '',
  content: '',
};
export const popupAtom = atom<popupType>(popupDefault);

interface progressType extends defaultType {
  count: number;
  total: number;
  onClick?: () => void;
  handleSecondary?: () => void;
  buttonLabel?: string;
  secondaryLabel?: string;
}
export const progressDefault: progressType = {
  visible: false,
  title: '',
  count: 0,
  total: 100,
};
export const progressAtom = atom<progressType>(progressDefault);

interface toastType {
  visible: boolean;
  text: string;
  icon?: 'check' | 'warn' | 'info';
  style?: 'dark' | 'light';
  width?: string;
  top?: string;
}
export const toastDefault: toastType = {
  visible: false,
  text: '',
  icon: 'check',
  style: 'dark',
};
export const toastAtom = atom<toastType>(toastDefault);
