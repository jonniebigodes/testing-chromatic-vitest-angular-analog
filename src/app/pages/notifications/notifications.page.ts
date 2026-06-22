import { Component } from '@angular/core';
import { Header } from '../../components/Header/ui-header';
import { Footer } from '../../components/Footer/ui-footer';
import { RadioGroup } from '../../components/RadioGroup/ui-radio-group';
import { Toggle } from '../../components/Toggle/ui-toggle';
import { Avatar } from '../../components/Avatar/ui-avatar';
import { Pill } from '../../components/Pill/ui-pill';
import { Button } from '../../components/Button/ui-button';
import { Divider } from '../../components/Divider/ui-divider';

interface AppNotification {
  id: number;
  sender: string;
  initials: string;
  tag: string;
  variant: 'default' | 'inverted' | 'warning' | 'success';
  message: string;
  time: string;
  unread: boolean;
}

@Component({
  selector: 'app-notifications-page',
  imports: [Header, Footer, RadioGroup, Toggle, Avatar, Pill, Button, Divider],
  template: `
    <div style="min-height:100vh;display:flex;flex-direction:column;">
      <ui-header title="Inbox" [links]="navLinks"></ui-header>
      <main style="flex:1;padding:2rem;max-width:720px;margin:0 auto;width:100%;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
          <h2 style="margin:0;">Notification Center</h2>
          <div style="display:flex;gap:0.75rem;">
            <ui-button label="Mark All Read" size="small"></ui-button>
            <ui-button label="Clear All" size="small" backgroundColor="#ef4444"></ui-button>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:1rem;">
          <ui-radio-group
            [options]="filterOptions"
            value="all"
            orientation="horizontal"
          ></ui-radio-group>
          <ui-toggle [pressed]="false" label="Unread only"></ui-toggle>
        </div>
        <ui-divider></ui-divider>
        <section style="margin:1.5rem 0;">
          <h3 style="margin:0 0 1rem;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Today</h3>
          @for (notification of todayNotifications; track notification.id) {
            <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;" [style.opacity]="notification.unread ? '1' : '0.6'">
              <ui-avatar [fallback]="notification.initials" [alt]="notification.sender"></ui-avatar>
              <div style="flex:1;min-width:0;">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
                  <strong style="font-size:0.9375rem;">{{ notification.sender }}</strong>
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <ui-pill [content]="notification.tag" [variant]="notification.variant" size="small"></ui-pill>
                    <span style="font-size:0.75rem;color:#94a3b8;white-space:nowrap;">{{ notification.time }}</span>
                  </div>
                </div>
                <p style="margin:0;font-size:0.875rem;color:#64748b;">{{ notification.message }}</p>
              </div>
            </div>
            <ui-divider></ui-divider>
          }
        </section>
        <section style="margin:1.5rem 0;">
          <h3 style="margin:0 0 1rem;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Yesterday</h3>
          @for (notification of yesterdayNotifications; track notification.id) {
            <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;opacity:0.7;">
              <ui-avatar [fallback]="notification.initials" [alt]="notification.sender"></ui-avatar>
              <div style="flex:1;min-width:0;">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
                  <strong style="font-size:0.9375rem;">{{ notification.sender }}</strong>
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <ui-pill [content]="notification.tag" [variant]="notification.variant" size="small"></ui-pill>
                    <span style="font-size:0.75rem;color:#94a3b8;white-space:nowrap;">{{ notification.time }}</span>
                  </div>
                </div>
                <p style="margin:0;font-size:0.875rem;color:#64748b;">{{ notification.message }}</p>
              </div>
            </div>
            <ui-divider></ui-divider>
          }
        </section>
      </main>
      <ui-footer label="© 2025 My App" [links]="footerLinks"></ui-footer>
    </div>
  `,
})
export default class NotificationsPage {
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Profile', href: '/profile' },
  ];
  footerLinks = ['Privacy', 'Terms', 'Help'];

  filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Unread', value: 'unread' },
    { label: 'Important', value: 'important' },
  ];

  todayNotifications: AppNotification[] = [
    {
      id: 1,
      sender: 'Alice Martin',
      initials: 'AM',
      tag: 'Mention',
      variant: 'default',
      message: 'Mentioned you in a comment on PR #42: "Can you take another look at this?"',
      time: '2h ago',
      unread: true,
    },
    {
      id: 2,
      sender: 'Build System',
      initials: 'BS',
      tag: 'Warning',
      variant: 'warning',
      message: 'Deploy pipeline failed on the staging branch. 3 tests did not pass.',
      time: '4h ago',
      unread: true,
    },
    {
      id: 3,
      sender: 'Bob Chen',
      initials: 'BC',
      tag: 'Approved',
      variant: 'success',
      message: 'Your pull request #38 was approved and successfully merged into main.',
      time: '6h ago',
      unread: false,
    },
  ];

  yesterdayNotifications: AppNotification[] = [
    {
      id: 4,
      sender: 'Clara Singh',
      initials: 'CS',
      tag: 'Assigned',
      variant: 'default',
      message: 'Assigned you to issue #19: "Update documentation for v2 API endpoints".',
      time: 'Yesterday 3:15 PM',
      unread: false,
    },
    {
      id: 5,
      sender: 'Security',
      initials: 'SC',
      tag: 'Warning',
      variant: 'warning',
      message: 'Unusual sign-in detected from a new location (Berlin, DE). Was this you?',
      time: 'Yesterday 9:00 AM',
      unread: false,
    },
  ];
}
