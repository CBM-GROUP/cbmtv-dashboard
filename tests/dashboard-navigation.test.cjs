/* eslint-disable @typescript-eslint/no-require-imports */
const test = require('node:test');
const assert = require('node:assert/strict');
const { visibleItem, isActive, containsActive } = require('../src/lib/dashboard-navigation.ts');

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
});
