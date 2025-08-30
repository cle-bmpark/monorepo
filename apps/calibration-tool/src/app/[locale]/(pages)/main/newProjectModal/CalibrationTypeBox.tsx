import { ProjectTypeEnum } from '@/dummies/Enum';
import IconTooltip from '@ui/components/modal/IconTooltip';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ComponentPropsWithoutRef, useState } from 'react';

type NativeButtonProps = ComponentPropsWithoutRef<'button'>;
interface CalibrationTypeBoxProps extends Omit<NativeButtonProps, 'type'> {
  type: ProjectTypeEnum;
  isSelected: boolean;
}

export default function CalibrationTypeBox({ type, isSelected, ...rest }: CalibrationTypeBoxProps) {
  const t = useTranslations('new-project-modal');
  const t_common = useTranslations('common');
  const [isHover, setIsHover] = useState<boolean>(false);

  const TOOLTIP_KEYS = {
    Intrinsic: 'tooltip-intrinsic',
    BirdEye: 'tooltip-birdeye',
    HandEye: 'tooltip-handeye',
    HandToHand: 'tooltip-handtohand',
  } as const;

  const IMAGE_MAP: Record<ProjectTypeEnum, string> = {
    [ProjectTypeEnum.Intrinsic]: '/intrinsic_3d_image.svg',
    [ProjectTypeEnum.BirdEye]: '/birdeye_3d_image.svg',
    [ProjectTypeEnum.HandEye]: '/handeye_3d_image.svg',
    [ProjectTypeEnum.HandToHand]: '/handtohand_3d_image.svg',
  };

  const variantStyle = {
    default: 'border-grey-200 bg-transparent text-grey-950',
    select: 'border-primary-500 bg-primary-50 text-primary-600',
    hover: 'border-primary-500 bg-transparent text-primary-600',
  };
  const variantKey = isSelected ? 'select' : isHover ? 'hover' : 'default';

  return (
    <button
      className={`flex w-fit cursor-pointer flex-col gap-2 rounded-md border p-2 ${variantStyle[variantKey]}`}
      {...rest}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='bg-linear-to-b h-[122px] w-[230px] rounded-sm from-[#BAB9B3] to-[#E4E4E1]'>
        <Image
          src={IMAGE_MAP[type]}
          alt={t_common(type)}
          width={230}
          height={122}
          className='h-[122px] w-[230px] rounded-sm object-cover'
        />
      </div>
      <div className='ml-2 flex items-center justify-between gap-2'>
        <p className='text-bold-16'>{t_common(type)}</p>
        <IconTooltip title={t_common(type)} detail={t(TOOLTIP_KEYS[type])} />
      </div>
    </button>
  );
}
