import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { Button } from '../../components/Button/ui-button';
import { Pill } from '../../components/Pill/ui-pill';
import { Divider } from '../../components/Divider/ui-divider';
import { Progress } from '../../components/Progress/ui-progress';

@Component({
  selector: 'app-showcase-page',
  imports: [Header, Footer, Button, Pill, Divider, Progress],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Showcase" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>Component Showcase</h2>
        <section style="margin-bottom:1.5rem;">
          <h3>Buttons</h3>
          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <ui-button label="Small" size="small"></ui-button>
            <ui-button label="Medium" size="medium"></ui-button>
            <ui-button label="Large" size="large"></ui-button>
            <ui-button label="Primary" backgroundColor="#6366f1" size="medium"></ui-button>
            <ui-button label="Danger" backgroundColor="#ef4444" size="medium"></ui-button>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Pills</h3>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            <ui-pill content="Default" variant="default" size="medium"></ui-pill>
            <ui-pill content="Inverted" variant="inverted" size="medium"></ui-pill>
            <ui-pill content="Warning" variant="warning" size="medium"></ui-pill>
            <ui-pill content="Success" variant="success" size="medium"></ui-pill>
            <ui-pill content="Small" variant="default" size="small"></ui-pill>
            <ui-pill content="Large" variant="default" size="large"></ui-pill>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Progress Bars</h3>
          <div style="display:flex;flex-direction:column;gap:1rem;">
            <ui-progress [value]="25" label="Quarter done"></ui-progress>
            <ui-progress [value]="50" label="Half done"></ui-progress>
            <ui-progress [value]="75" label="Almost done"></ui-progress>
            <ui-progress [value]="100" label="Complete"></ui-progress>
          </div>
        </section>
      </main>
      <ui-footer label="© 2025 Showcase" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class ShowcasePage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
  ];
  footerLinks = ['Privacy', 'Terms'];
}
