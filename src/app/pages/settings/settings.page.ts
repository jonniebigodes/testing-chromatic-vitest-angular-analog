import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { Toggle } from '../../components/Toggle/ui-toggle';
import { RadioGroup } from '../../components/RadioGroup/ui-radio-group';
import { Accordion } from '../../components/Accordion/ui-accordion';
import { Divider } from '../../components/Divider/ui-divider';

@Component({
  selector: 'app-settings-page',
  imports: [Header, Footer, Toggle, RadioGroup, Accordion, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Settings" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>Preferences</h2>
        <section style="margin-bottom:1.5rem;">
          <h3>Notifications</h3>
          <div style="display:flex;flex-direction:column;gap:1rem;">
            <ui-toggle [pressed]="true" label="Email notifications"></ui-toggle>
            <ui-toggle [pressed]="false" label="Push notifications"></ui-toggle>
            <ui-toggle [pressed]="true" label="Weekly digest"></ui-toggle>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Theme</h3>
          <ui-radio-group
            [options]="themeOptions"
            label="Select theme"
            value="system"
            orientation="vertical"
          ></ui-radio-group>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Advanced</h3>
          <ui-accordion [items]="faqItems"></ui-accordion>
        </section>
      </main>
      <ui-footer label="© 2025 Settings" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class SettingsPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Profile', href: '/profile' },
  ];
  footerLinks = ['Privacy', 'Terms', 'Help'];
  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'system' },
  ];
  faqItems = [
    { title: 'Data export', content: 'You can export all your data as a JSON archive from this section.' },
    { title: 'Account deletion', content: 'Permanently delete your account and all associated data.' },
    { title: 'API access', content: 'Generate personal access tokens to use the API programmatically.' },
  ];
}
