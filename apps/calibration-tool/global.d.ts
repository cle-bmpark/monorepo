type Messages = typeof import('messages/en.json');

declare global {
  type IntlMessages = Messages;
}
export {};
