/* eslint-disable @typescript-eslint/no-require-imports */
const test = require('node:test');
const assert = require('node:assert/strict');
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'CommonJS', moduleResolution: 'Node', jsx: 'react-jsx' } });
const { visibleItem, isActive, containsActive } = require('../src/lib/dashboard-navigation.ts');
const { navData } = require('../src/layouts/nav-config-dashboard.tsx');

test('the sidebar has the seven agreed modules and no duplicate advertising entry', () => {
  assert.deepEqual(navData.map(item => item.title), ['Dashboard', 'Channels', 'Content', 'Adverts', 'User Management', 'Settings', 'Profile']);
  assert.deepEqual(navData.find(item => item.title === 'Adverts').children.map(item => item.title), ['Overview', 'All Adverts', 'Advertisers', 'Campaigns', 'Placements', 'Reports']);
  assert.deepEqual(navData.find(item => item.title === 'Settings').children[0].children.map(item => item.title), ['Overview', 'Hero Settings']);
});

const settings = {
  title: 'Settings', path: '/settings', permission: 'settings', children: [
    { title: 'Homepage Management', path: '/homepage', permission: 'content', children: [
      { title: 'Overview', path: '/homepage', permission: 'content' },
      { title: 'Hero Settings', path: '/hero-settings', permission: 'settings' },
    ] },
    { title: 'Other Settings', path: '/settings', permission: 'settings' },
  ],
};

test('homepage remains reachable to content-only staff through the Settings parent', () => {
  const item = visibleItem(settings, { dashboard_permissions: ['content'] });
  assert.deepEqual(item.children.map(child => child.title), ['Homepage Management']);
  assert.deepEqual(item.children[0].children.map(child => child.title), ['Overview']);
  assert.equal(containsActive(item, '/homepage'), true);
});

test('settings-only staff see Hero Settings without receiving homepage management', () => {
  const item = visibleItem(settings, { dashboard_permissions: ['settings'] });
  assert.deepEqual(item.children[0].children.map(child => child.title), ['Hero Settings']);
  assert.equal(containsActive(item.children[0], '/hero-settings'), true);
  assert.equal(visibleItem(settings, { dashboard_permissions: [] }), null);
});

test('advert tabs and legacy routes have distinct active states', () => {
  assert.equal(isActive({ title: 'Campaigns', path: '/advertising#campaigns' }, '/advertising#campaigns'), true);
  assert.equal(isActive({ title: 'Campaigns', path: '/advertising#campaigns' }, '/advertising#reports'), false);
  assert.equal(isActive({ title: 'Overview', path: '/advertising#overview' }, '/advert-list'), false);
  assert.equal(isActive({ title: 'All Adverts', path: '/advertising#all-adverts' }, '/advert-list'), true);
  assert.equal(isActive({ title: 'Content', path: '/content-list' }, '/content/12/seasons'), true);
  assert.equal(isActive({ title: 'Dashboard', path: '/' }, '/discovery-analytics'), true);
});
