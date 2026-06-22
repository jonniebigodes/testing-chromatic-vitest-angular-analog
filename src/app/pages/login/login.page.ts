import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { LoginForm } from '../../components/Form/ui-login-form';
import { Divider } from '../../components/Divider/ui-divider';

@Component({
  selector: 'app-login-page',
  imports: [Header, Footer, LoginForm, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="My App"></ui-header>
      <main style="flex:1;display:flex;align-items:center;justify-content:center;padding:2rem;">
        <div style="width:100%;max-width:400px;">
          <h2 style="text-align:center;margin-bottom:1.5rem;">Sign In</h2>
          <ui-login-form></ui-login-form>
          <ui-divider></ui-divider>
          <p style="text-align:center;margin-top:1rem;font-size:0.875rem;color:#64748b;">
            Don't have an account? Contact your administrator.
          </p>
        </div>
      </main>
      <ui-footer label="© 2025 My App" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class LoginPage {
  footerLinks = ['Privacy', 'Terms'];
}
