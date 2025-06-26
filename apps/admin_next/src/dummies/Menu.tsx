import { MenuType } from '@repo/ui/src/components/layout/Navigation';
import { FaRegCheckSquare } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdDoNotDisturb } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

export const MENU: Record<string, MenuType> = {
  home: { key: 'hmgma', value: 'HMGMA', url: '/hmgma', icon: <RiComputerLine /> },
  components: {
    key: 'components',
    value: 'Component',
    url: '/components',
    icon: <LuLayoutDashboard />,
  },
  todo: {
    key: 'todo',
    value: 'ToDo',
    url: '/todo',
    icon: <FaRegCheckSquare />,
  },
  disabled: {
    key: 'disabled',
    value: 'Disabled',
    url: '/disabled',
    icon: <MdDoNotDisturb />,
    isDisabled: true,
  },
};
