import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import MediaPage from './media.page';

configure({ title: 'Pages/Media' });

describe('MediaPage', () => {
  test('renders media gallery heading', async () => {
    const screen = await render(MediaPage);
    await expect.element(screen.getByRole('heading', { name: 'Media Gallery' })).toBeVisible();
    await takeSnapshot('Media - Full page');
  });

  test('shows featured content section', async () => {
    const screen = await render(MediaPage);
    await expect.element(screen.getByRole('heading', { name: 'Featured Content' })).toBeVisible();
    await expect.element(screen.getByText('16:9 Content')).toBeVisible();
    await takeSnapshot('Media - Featured content');
  });

  test('shows contributors section', async () => {
    const screen = await render(MediaPage);
    await expect.element(screen.getByRole('heading', { name: 'Contributors' })).toBeVisible();
    await expect.element(screen.getByText('Alice')).toBeVisible();
    await expect.element(screen.getByText('Bob')).toBeVisible();
    await takeSnapshot('Media - Contributors');
  });
});
