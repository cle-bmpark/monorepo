import { RefObject, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

type Vertical = 'top' | 'bottom';
type Horizontal = 'left' | 'right';

interface UseAutoPlacementOptions {
  triggerRef: RefObject<HTMLElement | null>;
  dropdownRef: RefObject<HTMLElement | null>;
  isOpen: boolean;
  margin?: number;
}

function measureOffscreen(element: HTMLElement) {
  // 화면 밖에서 dropdown 을 열어 실제 height, width를 구하는 식
  const clone = element.cloneNode(true) as HTMLElement;

  clone.style.position = 'fixed';
  clone.style.left = '-99999px';
  clone.style.top = '-99999px';
  clone.style.visibility = 'hidden';
  clone.style.display = 'block';
  clone.style.pointerEvents = 'none';

  document.body.appendChild(clone);

  try {
    const rect = clone.getBoundingClientRect();
    const width = rect.width || clone.offsetWidth || 0;
    const height = rect.height || clone.offsetHeight || 0;
    return { width, height };
  } finally {
    document.body.removeChild(clone);
  }
}

export function useAutoPlacement({
  triggerRef,
  dropdownRef,
  isOpen,
  margin = 4,
}: UseAutoPlacementOptions) {
  const [vertical, setVertical] = useState<Vertical>('bottom');
  const [horizontal, setHorizontal] = useState<Horizontal>('left');

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const calculatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const dropdown = dropdownRef.current;
    if (!trigger || !dropdown) return;

    const triggerRect = trigger.getBoundingClientRect();
    const { width: dropdownWidth, height: dropdownHeight } = measureOffscreen(dropdown);

    // 위/아래 결정
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    const need = dropdownHeight + margin;
    if (spaceBelow >= need) setVertical('bottom');
    else if (spaceAbove >= need) setVertical('top');
    else {
      if (spaceBelow > spaceAbove) setVertical('bottom');
      else setVertical('top');
    }

    // 좌/우 결정
    const leftAlignedRightEdge = triggerRect.left + dropdownWidth;
    const rightAlignedLeftEdge = triggerRect.right - dropdownWidth;
    if (leftAlignedRightEdge <= window.innerWidth) setHorizontal('left');
    else if (rightAlignedLeftEdge >= 0) setHorizontal('right');
    else setHorizontal('left');
  }, [dropdownRef, margin, triggerRef]);

  useIsomorphicLayoutEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    // 이번 페인트 직전에 딱 1번만 실행하도록 설정
    let rafId = 0;

    const schedule = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = 0;
        calculatePosition();
      });
    };

    const abortController = new AbortController();
    const opts: AddEventListenerOptions = {
      passive: true,
      capture: false,
      signal: abortController.signal,
    };

    window.addEventListener('scroll', schedule, opts);
    window.addEventListener('resize', schedule);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      abortController.abort();
    };
  }, [isOpen, calculatePosition]);

  const positionClass = useMemo(() => {
    if (!isOpen) return '';

    const v = vertical === 'bottom' ? 'top-full mt-1' : 'bottom-full mb-1';
    const h = horizontal === 'left' ? 'left-0' : 'right-0';
    return `${v} ${h}`;
  }, [vertical, horizontal, isOpen]);

  return { positionClass };
}
