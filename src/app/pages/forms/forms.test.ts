import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { configure, takeSnapshot } from '@chromatic-com/vitest';
import FormsPage from './forms.page';

configure({ title: 'Pages/Forms' });

describe('FormsPage', () => {
  test('renders contact form heading', async () => {
    const screen = await render(FormsPage);
    await expect.element(screen.getByRole('heading', { name: 'Contact Form' })).toBeVisible();
    await takeSnapshot('Forms - Full page');
  });

  test('shows form fields with labels', async () => {
    const screen = await render(FormsPage);
    await expect.element(screen.getByText('Full Name')).toBeVisible();
    await expect.element(screen.getByText('Email Address')).toBeVisible();
    await expect.element(screen.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
    await takeSnapshot('Forms - Fields and labels');
  });

  test('shows checkboxes and action buttons', async () => {
    const screen = await render(FormsPage);
    await expect.element(screen.getByText('I agree to the terms and conditions')).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Submit' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Cancel' })).toBeVisible();
    await takeSnapshot('Forms - Checkboxes and submit');
  });
});
