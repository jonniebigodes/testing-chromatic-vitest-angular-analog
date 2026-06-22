import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import AnimationsPage from './animations.page';

configure({ title: 'Pages/Animations' });

describe('AnimationsPage', () => {
  test('renders animation gallery heading', async () => {
    const screen = await render(AnimationsPage);
    await expect.element(screen.getByRole('heading', { name: 'Animation Gallery' })).toBeVisible();
    await takeSnapshot('Animations - Full page');
  });

  test('shows bounce elevation section', async () => {
    const screen = await render(AnimationsPage);
    await expect.element(screen.getByRole('heading', { name: 'Bounce Elevation' })).toBeVisible();
    await expect.element(screen.getByText('A box that bounces up and down with easing.')).toBeVisible();
    await takeSnapshot('Animations - Bounce elevation');
  });

  test('shows all animation sections', async () => {
    const screen = await render(AnimationsPage);
    await expect.element(screen.getByRole('heading', { name: 'Loading Pulse Dots' })).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Rotation Loop' })).toBeVisible();
    await takeSnapshot('Animations - All sections visible');
  });
});
