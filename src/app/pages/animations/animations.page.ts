import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { BounceElevation } from '../../components/animations/BounceElevation/ui-bounce-elevation';
import { LoadingPulseDots } from '../../components/animations/LoadingPulseDots/ui-loading-pulse-dots';
import { RotationLoop } from '../../components/animations/RotationLoop/ui-rotation-loop';
import { Divider } from '../../components/Divider/ui-divider';

@Component({
  selector: 'app-animations-page',
  imports: [Header, Footer, BounceElevation, LoadingPulseDots, RotationLoop, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Animations" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:800px;margin:0 auto;width:100%;">
        <h2>Animation Gallery</h2>
        <section style="margin-bottom:2rem;">
          <h3>Bounce Elevation</h3>
          <p style="font-size:0.875rem;color:#64748b;">A box that bounces up and down with easing.</p>
          <div style="display:flex;gap:3rem;align-items:flex-end;padding:2rem 0;">
            <ui-bounce-elevation [liftPx]="24" [cycleMs]="1200"></ui-bounce-elevation>
            <ui-bounce-elevation [liftPx]="40" [cycleMs]="1800"></ui-bounce-elevation>
            <ui-bounce-elevation [liftPx]="16" [cycleMs]="900"></ui-bounce-elevation>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:2rem 0;">
          <h3>Loading Pulse Dots</h3>
          <p style="font-size:0.875rem;color:#64748b;">Pulsing dots for loading states.</p>
          <div style="display:flex;flex-direction:column;gap:1.5rem;padding:1rem 0;">
            <ui-loading-pulse-dots [dotCount]="5" color="#6366f1"></ui-loading-pulse-dots>
            <ui-loading-pulse-dots [dotCount]="3" color="#10b981" [cycleMs]="800"></ui-loading-pulse-dots>
            <ui-loading-pulse-dots [dotCount]="7" color="#f59e0b" [cycleMs]="1800"></ui-loading-pulse-dots>
          </div>
        </section>
        <ui-divider></ui-divider>
        <section style="margin:2rem 0;">
          <h3>Rotation Loop</h3>
          <p style="font-size:0.875rem;color:#64748b;">Continuously rotating element.</p>
          <div style="display:flex;gap:3rem;padding:1rem 0;">
            <ui-rotation-loop [durationMs]="1600"></ui-rotation-loop>
            <ui-rotation-loop [durationMs]="3200"></ui-rotation-loop>
            <ui-rotation-loop [durationMs]="800"></ui-rotation-loop>
          </div>
        </section>
      </main>
      <ui-footer label="© 2025 Animations Demo" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class AnimationsPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Showcase', href: '/showcase' },
  ];
  footerLinks = ['Privacy', 'Terms'];
}
