import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import LoginPage from './login.page';

configure({ title: 'Pages/Login' });

describe('LoginPage', () => {
  test('renders sign in heading', async () => {
    const screen = await render(LoginPage);
    await expect.element(screen.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    await takeSnapshot('Login - Full page');
  });

  test('shows email and password fields', async () => {
    const screen = await render(LoginPage);
    await expect.element(screen.getByPlaceholder('Enter your email')).toBeVisible();
    await expect.element(screen.getByPlaceholder('Enter your password')).toBeVisible();
    await takeSnapshot('Login - Form fields');
  });

  test('renders login submit button', async () => {
    const screen = await render(LoginPage);
    await expect.element(screen.getByRole('button', { name: 'Login' })).toBeVisible();
    await takeSnapshot('Login - Submit button');
  });
});
