import { MdDashboard } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
import { BsPersonFill, BsDisplayFill, BsMegaphoneFill, BsFillPeopleFill, BsGearFill } from 'react-icons/bs';

export type DashboardPermission = 'channels' | 'content' | 'adverts' | 'settings' | 'users' | 'analytics';
export type NavItem = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  permission?: DashboardPermission;
  children?: NavItem[];
};

export const navData: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: <MdDashboard />, permission: 'analytics' },
  { title: 'Channels', path: '/channel-list', icon: <BsDisplayFill />, permission: 'channels', children: [
    { title: 'All Channels', path: '/channel-list', permission: 'channels' },
  ] },
  { title: 'Content', path: '/content-list', icon: <BiSolidVideos />, permission: 'content', children: [
    { title: 'All Content', path: '/content-list', permission: 'content' },
    { title: 'Genres', path: '/content/genres', permission: 'content' },
  ] },
  { title: 'Adverts', path: '/advertising', icon: <BsMegaphoneFill />, permission: 'adverts', children: [
    { title: 'Overview', path: '/advertising#overview', permission: 'adverts' },
    { title: 'All Adverts', path: '/advertising#all-adverts', permission: 'adverts' },
    { title: 'Advertisers', path: '/advertising#advertisers', permission: 'adverts' },
    { title: 'Campaigns', path: '/advertising#campaigns', permission: 'adverts' },
    { title: 'Placements', path: '/advertising#placements', permission: 'adverts' },
    { title: 'Reports', path: '/advertising#reports', permission: 'adverts' },
  ] },
  { title: 'User Management', path: '/user-management', icon: <BsFillPeopleFill />, permission: 'users', children: [
    { title: 'Users', path: '/user-management#users', permission: 'users' },
    { title: 'Roles & Permissions', path: '/user-management#roles', permission: 'users' },
  ] },
  { title: 'Settings', path: '/settings', icon: <BsGearFill />, permission: 'settings', children: [
    { title: 'Homepage Management', path: '/homepage', permission: 'content', children: [
      { title: 'Overview', path: '/homepage', permission: 'content' },
      { title: 'Hero Settings', path: '/hero-settings', permission: 'settings' },
    ] },
    { title: 'Other Settings', path: '/settings', permission: 'settings' },
  ] },
  { title: 'Profile', path: '/user', icon: <BsPersonFill /> },
];
