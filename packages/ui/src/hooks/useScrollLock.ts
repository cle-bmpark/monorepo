import { useEffect } from 'react';

export default function useScrollLock(isLock: boolean) {
  useEffect(() => {
    if (!isLock) return;

    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;

    const hasScrollbar = () => {
      // 스크롤바 유무 확인
      return document.body.scrollHeight > window.innerHeight;
    };

    document.body.style.overflow = 'hidden';
    if (hasScrollbar()) {
      document.body.style.marginRight = '4px'; // global.css: scrollbar width = 4px
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.marginRight = '0px';
    };
  }, [isLock]);
}
