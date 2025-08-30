import { ProjectTypeEnum } from '@/dummies/Enum';
import Badge, { BadgeColor } from '@ui/components/badge/Badge';
import { useTranslations } from 'next-intl';

interface ProjectTypeBadgeProps {
  type: ProjectTypeEnum;
}

export default function ProjectTypeBadge({ type }: ProjectTypeBadgeProps) {
  const t = useTranslations('common');

  const color: Record<ProjectTypeEnum, BadgeColor> = {
    [ProjectTypeEnum.Intrinsic]: 'yellow',
    [ProjectTypeEnum.BirdEye]: 'blue',
    [ProjectTypeEnum.HandEye]: 'green',
    [ProjectTypeEnum.HandToHand]: 'purple',
  };

  return <Badge value={t(type)} color={color[type]} />;
}
