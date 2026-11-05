import { MdDashboard } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
import { BsPersonFill, BsDisplayFill, BsMegaphoneFill, BsFillPeopleFill, BsGearFill } from 'react-icons/bs';

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
  permission?: 'channels' | 'content' | 'adverts' | 'settings' | 'users' | 'analytics';
  children?: Array<Pick<NavItem, 'title' | 'path' | 'permission'>>;
};

export const navData: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: <MdDashboard />, permission: 'analytics', children: [
    { title: 'Overview', path: '/' }, { title: 'Discovery Analytics', path: '/discovery-analytics' },
  ] },
  { title: 'Channels', path: '/channel-list', icon: <BsDisplayFill />, permission: 'channels' },
  { title: 'Content', path: '/content-list', icon: <BiSolidVideos />, permission: 'content', children: [
    { title: 'Content Management', path: '/content-list' }, { title: 'Genres', path: '/content/genres' },
  ] },
  { title: 'General', path: '/settings', icon: <BsGearFill />, children: [
    { title: 'General Settings', path: '/settings', permission: 'settings' },
    { title: 'Editorial Adverts', path: '/advert-list', permission: 'adverts' },
  ] },
  { title: 'Adverts', path: '/advertising', icon: <BsMegaphoneFill />, permission: 'adverts' },
  { title: 'Homepage Management', path: '/homepage', icon: <BsDisplayFill />, permission: 'content' },
  { title: 'User Management', path: '/user-management', icon: <BsFillPeopleFill />, permission: 'users' },
  { title: 'Profile', path: '/user', icon: <BsPersonFill /> },
];
