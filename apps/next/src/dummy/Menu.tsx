import { MenuType } from '@repo/ui/src/components/layout/Navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdDoNotDisturb } from 'react-icons/md';
export const MENU: Record<string, MenuType> = {
  components: {
    key: 'components',
    value: 'Component',
    url: '/components',
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
