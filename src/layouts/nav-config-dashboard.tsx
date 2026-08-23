import { MdDashboard } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
import { BsPersonFill, BsDisplayFill, BsMegaphoneFill, BsFillPeopleFill } from 'react-icons/bs';

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
  adminOnly?: boolean;
};

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
  },

  {
    title: 'Channels',
    path: '/channel-list',
    icon: <BsDisplayFill />,
  },
  {
    title: 'Content',
    path: '/content-list',
    icon: <BiSolidVideos />,
  },
  {
    title: 'Adverts',
    path: '/advert-list',
    icon: <BsMegaphoneFill />,
  },
  {
    title: 'User Management',
    path: '/user-management',
    icon: <BsFillPeopleFill />,
    adminOnly: true,
  },
  {
    title: 'Profile',
    path: '/user',
    icon: <BsPersonFill />,
  },
];
