import { MdDashboard } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
import { BsPersonFill, BsDisplayFill, BsMegaphoneFill, BsFillPeopleFill, BsGearFill } from 'react-icons/bs';

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
  permission?: 'channels' | 'content' | 'adverts' | 'settings' | 'users' | 'analytics';
};

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
    permission: 'analytics',
  },

  {
    title: 'Channels',
    path: '/channel-list',
    icon: <BsDisplayFill />,
    permission: 'channels',
  },
  {
    title: 'Content',
    path: '/content-list',
    icon: <BiSolidVideos />,
    permission: 'content',
  },
  {
    title: 'Adverts',
    path: '/advert-list',
    icon: <BsMegaphoneFill />,
    permission: 'adverts',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <BsGearFill />,
    permission: 'settings',
  },
  {
    title: 'User Management',
    path: '/user-management',
    icon: <BsFillPeopleFill />,
    permission: 'users',
  },
  {
    title: 'Profile',
    path: '/user',
    icon: <BsPersonFill />,
  },
];
