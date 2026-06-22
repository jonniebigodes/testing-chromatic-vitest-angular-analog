import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { AspectRatio } from '../../components/AspectRatio/ui-aspect-ratio';
import { Avatar } from '../../components/Avatar/ui-avatar';
import { Divider } from '../../components/Divider/ui-divider';
import { Meter } from '../../components/Meter/ui-meter';

@Component({
  selector: 'app-media-page',
  imports: [Header, Footer, AspectRatio, Avatar, Divider, Meter],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Media" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>Media Gallery</h2>
        <section style="margin-bottom:1.5rem;">
          <h3>Featured Content</h3>
          <div style="max-width:560px;">
            <ui-aspect-ratio [ratio]="16/9">
              <div style="width:100%;height:100%;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <span style="color:white;font-size:1.25rem;font-weight:600;">16:9 Content</span>
              </div>
            </ui-aspect-ratio>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Square Thumbnails</h3>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:480px;">
            @for (item of thumbnails; track item.label) {
              <ui-aspect-ratio [ratio]="1">
                <div style="width:100%;height:100%;border-radius:6px;display:flex;align-items:center;justify-content:center;" [style.background]="item.bg">
                  <span style="color:white;font-size:0.75rem;">{{ item.label }}</span>
                </div>
              </ui-aspect-ratio>
            }
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Contributors</h3>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
            @for (contributor of contributors; track contributor.name) {
              <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
                <ui-avatar [fallback]="contributor.initials" [alt]="contributor.name"></ui-avatar>
                <span style="font-size:0.75rem;">{{ contributor.name }}</span>
              </div>
            }
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3>Upload Progress</h3>
          <ui-meter [value]="67" label="Storage used" [high]="80"></ui-meter>
        </section>
      </main>
      <ui-footer label="© 2025 Media App" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class MediaPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
  ];
  footerLinks = ['Privacy', 'Terms', 'Upload'];
  thumbnails = [
    { label: 'Photo 1', bg: '#6366f1' },
    { label: 'Photo 2', bg: '#8b5cf6' },
    { label: 'Photo 3', bg: '#10b981' },
    { label: 'Photo 4', bg: '#f59e0b' },
    { label: 'Photo 5', bg: '#ef4444' },
    { label: 'Photo 6', bg: '#3b82f6' },
  ];
  contributors = [
    { name: 'Alice', initials: 'A' },
    { name: 'Bob', initials: 'B' },
    { name: 'Clara', initials: 'C' },
    { name: 'David', initials: 'D' },
  ];
}
