'use client';
import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  anchor: HTMLElement | null; // 기준이 되는 아이콘 element
  children: ReactNode;
  offset?: number; // 아이콘과의 간격
}
export default function TooltipPortal({ anchor, children, offset = 8 }: Props) {
  const [pos, setPos] = useState<{ top: number; left: number; transform?: string }>({
    top: 0,
    left: 0,
  });

  useLayoutEffect(() => {
    if (!anchor) return;
    const update = () => {
      const r = anchor.getBoundingClientRect();
      setPos({
        top: r.top - offset,
        left: r.left + r.width / 2,
        transform: 'translate(-50%, -100%)',
      });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [anchor, offset]);

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        transform: pos.transform,
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body,
  );
}
