import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { Avatar } from '../../components/Avatar/ui-avatar';
import { Pill } from '../../components/Pill/ui-pill';
import { Button } from '../../components/Button/ui-button';
import { Divider } from '../../components/Divider/ui-divider';

@Component({
  selector: 'app-profile-page',
  imports: [Header, Footer, Avatar, Pill, Button, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Profile" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <section style="display:flex;align-items:center;gap:1.5rem;margin-bottom:2rem;">
          <ui-avatar fallback="JD" alt="Jane Doe"></ui-avatar>
          <div>
            <h2 style="margin:0 0 0.5rem;">Jane Doe</h2>
            <p style="margin:0;color:#64748b;">Software Engineer</p>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Skills</h3>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            <ui-pill content="Angular" variant="default"></ui-pill>
            <ui-pill content="TypeScript" variant="default"></ui-pill>
            <ui-pill content="Vitest" variant="default"></ui-pill>
            <ui-pill content="Chromatic" variant="default"></ui-pill>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Status</h3>
          <div style="display:flex;gap:0.5rem;">
            <ui-pill content="Available" variant="success"></ui-pill>
            <ui-pill content="Remote" variant="inverted"></ui-pill>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;display:flex;gap:1rem;">
          <ui-button label="Edit Profile" size="medium"></ui-button>
          <ui-button label="View Activity" size="medium"></ui-button>
        </section>
      </main>
      <ui-footer label="© 2025 Profile App" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class ProfilePage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/settings' },
  ];
  footerLinks = ['Privacy', 'Terms'];
}
