import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import NotificationsPage from './notifications.page';

configure({ title: 'Pages/Notifications' });

describe('NotificationsPage', () => {
  test('renders notification center heading', async () => {
    const screen = await render(NotificationsPage);
    await expect.element(screen.getByRole('heading', { name: 'Notification Center' })).toBeVisible();
    await takeSnapshot('Notifications - Full page');
  });

  test('shows filter options and unread toggle', async () => {
    const screen = await render(NotificationsPage);
    await expect.element(screen.getByRole('radio', { name: 'All' })).toBeVisible();
    await expect.element(screen.getByRole('radio', { name: 'Unread' })).toBeVisible();
    await expect.element(screen.getByText('Unread only')).toBeVisible();
    await takeSnapshot('Notifications - Filter controls');
  });

  test('shows today notifications with sender names', async () => {
    const screen = await render(NotificationsPage);
    await expect.element(screen.getByText('Alice Martin')).toBeVisible();
    await expect.element(screen.getByText('Bob Chen')).toBeVisible();
    await takeSnapshot('Notifications - Today list');
  });

  test('shows action buttons', async () => {
    const screen = await render(NotificationsPage);
    await expect.element(screen.getByRole('button', { name: 'Mark All Read' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Clear All' })).toBeVisible();
    await takeSnapshot('Notifications - Action buttons');
  });
});
