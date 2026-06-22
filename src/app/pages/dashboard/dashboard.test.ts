import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import DashboardPage from './dashboard.page';

configure({ title: 'Pages/Dashboard' });

describe('DashboardPage', () => {
  test('renders header and page layout', async () => {
    const screen = await render(DashboardPage);
    await expect.element(screen.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await takeSnapshot('Dashboard - Full page layout');
  });

  test('shows all metrics sections', async () => {
    const screen = await render(DashboardPage);
    await expect.element(screen.getByRole('heading', { name: 'Metrics Overview' })).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Task Completion' })).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Storage Usage' })).toBeVisible();
    await takeSnapshot('Dashboard - Metrics sections visible');
  });

  test('renders footer with copyright', async () => {
    const screen = await render(DashboardPage);
    await expect.element(screen.getByText('© 2025 Dashboard App')).toBeVisible();
    await takeSnapshot('Dashboard - Footer rendered');
  });
});
