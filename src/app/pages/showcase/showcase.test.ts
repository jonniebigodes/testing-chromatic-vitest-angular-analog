import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import ShowcasePage from './showcase.page';

configure({ title: 'Pages/Showcase' });

describe('ShowcasePage', () => {
  test('renders component showcase heading', async () => {
    const screen = await render(ShowcasePage);
    await expect.element(screen.getByRole('heading', { name: 'Component Showcase' })).toBeVisible();
    await takeSnapshot('Showcase - Full page');
  });

  test('shows all button size variants', async () => {
    const screen = await render(ShowcasePage);
    await expect.element(screen.getByRole('heading', { name: 'Buttons' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Small' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Large' })).toBeVisible();
    await takeSnapshot('Showcase - Button variants');
  });

  test('shows pill variants section', async () => {
    const screen = await render(ShowcasePage);
    await expect.element(screen.getByRole('heading', { name: 'Pills' })).toBeVisible();
    await expect.element(screen.getByText('Warning')).toBeVisible();
    await expect.element(screen.getByText('Success')).toBeVisible();
    await takeSnapshot('Showcase - Pill variants');
  });
});
