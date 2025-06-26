import { MenuType } from '@repo/ui/src/components/layout/Navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdDoNotDisturb } from 'react-icons/md';
import { SiSwagger } from 'react-icons/si';

export const MENU: Record<string, MenuType> = {
  swagger: {
    key: 'swagger',
    value: 'Swagger',
    url: '/swagger',
    icon: <SiSwagger />,
  },
  component: {
    key: 'component',
    value: 'Component',
    url: '/component',
    icon: <LuLayoutDashboard />,
  },
  disabled: {
    key: 'disabled',
    value: 'Disabled',
    url: '/disabled',
    icon: <MdDoNotDisturb />,
    isDisabled: true,
  },
};
