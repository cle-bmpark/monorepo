import { ProjectTypeEnum } from '@/dummies/Enum';
import Badge, { BadgeColors } from '@ui/components/badge/Badge';
import { useTranslations } from 'next-intl';

interface ProjectTypeBadgeProps {
  type: ProjectTypeEnum;
}

export default function ProjectTypeBadge({ type }: ProjectTypeBadgeProps) {
  const t = useTranslations('common');

  const color = {
    [ProjectTypeEnum.Intrinsic]: BadgeColors[0],
    [ProjectTypeEnum.BirdEye]: BadgeColors[1],
    [ProjectTypeEnum.HandEye]: BadgeColors[2],
    [ProjectTypeEnum.HandToHand]: BadgeColors[3],
  };

  return <Badge value={t(type)} color={color[type]} />;
}
