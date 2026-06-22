import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import ProfilePage from './profile.page';

configure({ title: 'Pages/Profile' });

describe('ProfilePage', () => {
  test('renders user identity section', async () => {
    const screen = await render(ProfilePage);
    await expect.element(screen.getByText('Jane Doe')).toBeVisible();
    await expect.element(screen.getByText('Software Engineer')).toBeVisible();
    await takeSnapshot('Profile - User identity');
  });

  test('shows skills pills', async () => {
    const screen = await render(ProfilePage);
    await expect.element(screen.getByRole('heading', { name: 'Skills' })).toBeVisible();
    await expect.element(screen.getByText('Angular')).toBeVisible();
    await expect.element(screen.getByText('TypeScript')).toBeVisible();
    await takeSnapshot('Profile - Skills section');
  });

  test('renders action buttons', async () => {
    const screen = await render(ProfilePage);
    await expect.element(screen.getByRole('button', { name: 'Edit Profile' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'View Activity' })).toBeVisible();
    await takeSnapshot('Profile - Action buttons');
  });
});
