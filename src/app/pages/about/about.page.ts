import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { Avatar } from '../../components/Avatar/ui-avatar';
import { Accordion } from '../../components/Accordion/ui-accordion';
import { Divider } from '../../components/Divider/ui-divider';
import { Button } from '../../components/Button/ui-button';

@Component({
  selector: 'app-about-page',
  imports: [Header, Footer, Avatar, Accordion, Divider, Button],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="About" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>About Us</h2>
        <p>We build tools that help teams ship better products, faster.</p>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Our Team</h3>
          <div style="display:flex;flex-direction:column;gap:1.5rem;">
            @for (member of team; track member.name) {
              <div style="display:flex;align-items:center;gap:1rem;">
                <ui-avatar [fallback]="member.initials" [alt]="member.name"></ui-avatar>
                <div>
                  <strong>{{ member.name }}</strong>
                  <p style="margin:0;font-size:0.875rem;color:#64748b;">{{ member.role }}</p>
                </div>
              </div>
            }
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Frequently Asked Questions</h3>
          <ui-accordion [items]="faqItems"></ui-accordion>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <ui-button label="Get in Touch" size="large"></ui-button>
        </section>
      </main>
      <ui-footer label="© 2025 Our Company" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class AboutPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
  ];
  footerLinks = ['Privacy', 'Terms', 'Contact'];
  team = [
    { name: 'Alice Martin', initials: 'AM', role: 'Engineering Lead' },
    { name: 'Bob Chen', initials: 'BC', role: 'Product Designer' },
    { name: 'Clara Singh', initials: 'CS', role: 'Frontend Engineer' },
  ];
  faqItems = [
    { title: 'What do you build?', content: 'We build UI testing and visual regression tools for modern web applications.' },
    { title: 'How can I contribute?', content: 'Check our GitHub repository for open issues and contribution guidelines.' },
    { title: 'Do you offer enterprise support?', content: 'Yes, reach out to our team for enterprise pricing and dedicated support options.' },
  ];
}
