import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import AboutPage from './about.page';

configure({ title: 'Pages/About' });

describe('AboutPage', () => {
  test('renders about us heading', async () => {
    const screen = await render(AboutPage);
    await expect.element(screen.getByRole('heading', { name: 'About Us' })).toBeVisible();
    await takeSnapshot('About - Full page');
  });

  test('shows team members', async () => {
    const screen = await render(AboutPage);
    await expect.element(screen.getByRole('heading', { name: 'Our Team' })).toBeVisible();
    await expect.element(screen.getByText('Alice Martin')).toBeVisible();
    await expect.element(screen.getByText('Engineering Lead')).toBeVisible();
    await takeSnapshot('About - Team section');
  });

  test('shows FAQ accordion and CTA button', async () => {
    const screen = await render(AboutPage);
    await expect.element(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Get in Touch' })).toBeVisible();
    await takeSnapshot('About - FAQ and CTA');
  });
});
