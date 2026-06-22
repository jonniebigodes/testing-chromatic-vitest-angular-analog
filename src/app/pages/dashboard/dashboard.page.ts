import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { Progress } from '../../components/Progress/ui-progress';
import { Meter } from '../../components/Meter/ui-meter';
import { Divider } from '../../components/Divider/ui-divider';

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Footer, Progress, Meter, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Dashboard" [links]="navLinks" [isSticky]="true"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>Metrics Overview</h2>
        <section style="margin-bottom:1.5rem;">
          <h3>Task Completion</h3>
          <ui-progress [value]="72" label="Tasks done"></ui-progress>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Storage Usage</h3>
          <ui-meter [value]="58" label="Used storage" [high]="80" [low]="30"></ui-meter>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>CPU Load</h3>
          <ui-meter [value]="91" label="CPU usage" [high]="85"></ui-meter>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Memory</h3>
          <ui-progress [value]="45" label="Memory used" [readonly]="true"></ui-progress>
        </section>
      </main>
      <ui-footer label="© 2025 Dashboard App" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class DashboardPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
  ];
  footerLinks = ['Privacy', 'Terms', 'Support'];
}
