import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import SettingsPage from './settings.page';

configure({ title: 'Pages/Settings' });

describe('SettingsPage', () => {
  test('renders preferences heading', async () => {
    const screen = await render(SettingsPage);
    await expect.element(screen.getByRole('heading', { name: 'Preferences' })).toBeVisible();
    await takeSnapshot('Settings - Full page');
  });

  test('shows notification toggles', async () => {
    const screen = await render(SettingsPage);
    await expect.element(screen.getByRole('heading', { name: 'Notifications' })).toBeVisible();
    await expect.element(screen.getByText('Email notifications')).toBeVisible();
    await expect.element(screen.getByText('Push notifications')).toBeVisible();
    await takeSnapshot('Settings - Notification toggles');
  });

  test('shows theme radio group', async () => {
    const screen = await render(SettingsPage);
    await expect.element(screen.getByRole('heading', { name: 'Theme' })).toBeVisible();
    await expect.element(screen.getByText('Light')).toBeVisible();
    await expect.element(screen.getByText('Dark')).toBeVisible();
    await expect.element(screen.getByText('System')).toBeVisible();
    await takeSnapshot('Settings - Theme options');
  });
});
