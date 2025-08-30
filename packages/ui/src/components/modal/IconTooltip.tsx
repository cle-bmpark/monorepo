import Tooltip, { TooltipProps } from '@ui/components/modal/Tooltip';
import TooltipPortal from '@ui/components/modal/TooltipPortal';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { useRef, useState } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';

interface IconTooltipProps extends TooltipProps {
  color?: string;
  size?: number;
}

export default function IconTooltip({ color, size = 16, ...rest }: IconTooltipProps) {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const grey500 = useColorByTheme('grey-500');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        ref={anchorRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <HiOutlineInformationCircle
          color={color ?? grey500}
          className='m-1 cursor-pointer'
          size={size}
          aria-hidden
        />
      </div>
      {isOpen && anchorRef.current && (
        <TooltipPortal anchor={anchorRef.current} offset={8}>
          <Tooltip {...rest} />
        </TooltipPortal>
      )}
    </div>
  );
}
