import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { Input } from '../../components/Form/ui-input';
import { Label } from '../../components/Form/ui-label';
import { Checkbox } from '../../components/Form/ui-checkbox';
import { Button } from '../../components/Button/ui-button';
import { Divider } from '../../components/Divider/ui-divider';

@Component({
  selector: 'app-forms-page',
  imports: [Header, Footer, Input, Label, Checkbox, Button, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Forms" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>Contact Form</h2>
        <form style="display:flex;flex-direction:column;gap:1.25rem;max-width:480px;">
          <div style="display:flex;flex-direction:column;gap:0.5rem;">
            <ui-label htmlFor="name-input" content="Full Name"></ui-label>
            <ui-input id="name-input" name="name" placeholder="Enter your full name"></ui-input>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.5rem;">
            <ui-label htmlFor="email-input" content="Email Address"></ui-label>
            <ui-input id="email-input" name="email" type="email" placeholder="Enter your email" [required]="true"></ui-input>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.5rem;">
            <ui-label htmlFor="subject-input" content="Subject"></ui-label>
            <ui-input id="subject-input" name="subject" placeholder="What is this about?"></ui-input>
          </div>
          <ui-divider></ui-divider>
          <ui-checkbox label="I agree to the terms and conditions" name="terms"></ui-checkbox>
          <ui-checkbox label="Subscribe to newsletter" name="newsletter" [checked]="true"></ui-checkbox>
          <div style="display:flex;gap:1rem;">
            <ui-button label="Submit" size="medium"></ui-button>
            <ui-button label="Cancel" size="medium"></ui-button>
          </div>
        </form>
        <ui-divider></ui-divider>
        <section style="margin-top:2rem;">
          <h3>Disabled State</h3>
          <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:480px;">
            <ui-input placeholder="Disabled input" [disabled]="true"></ui-input>
            <ui-checkbox label="Disabled checkbox" [disabled]="true"></ui-checkbox>
          </div>
        </section>
      </main>
      <ui-footer label="© 2025 Forms Demo" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class FormsPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
  ];
  footerLinks = ['Privacy', 'Terms'];
}
