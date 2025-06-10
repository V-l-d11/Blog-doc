import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import {
  HeaderItem,
  SharedUiModule,
  UiHeaderConfig,
} from '@blog-monorepo/shared-ui';
import { filter, map, Subject, takeUntil } from 'rxjs';

@Component({
  imports: [SharedUiModule, RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headerType?: string;
  isStickyHeader = false;
  private destroy$ = new Subject<void>();

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.listenToRouteData();
  }

  public tursoHeaderConfig: UiHeaderConfig = {
    layout: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    sticky: true,
    backgroundColor: '#1F3B3B',
    className: 'px-6 py-3 rounded-xl shadow-md',
    borderRadius: '10px',
    sections: [
      {
        position: 'left',
        items: [
          {
            type: 'icon',
            iconName: 'turso-logo',
            tooltip: 'Turso',
            action: () => console.log('Go to home'),
            styles: {
              fontSize: '20px',
              color: '#00FFD1',
              classList: ['mr-2'],
            },
          },
          {
            type: 'text',
            text: 'TURSO',
            styles: {
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#00FFD1',
              classList: ['mr-8'],
            },
          },
          ...(
            ['About us', 'Docs', 'Become a writer', 'Meetings', 'Blog'] as const
          ).map(
            (label): HeaderItem => ({
              type: 'text',
              text: label,
              styles: {
                fontSize: '14px',
                color: 'white',
                margin: '0 12px',
                classList: ['header-hover-link'],
              },
              action: () => console.log(`${label} clicked`),
            })
          ),
        ],
      },
      {
        position: 'right',
        items: [
          {
            type: 'icon',
            iconName: 'chat',
            tooltip: 'Community',
            action: () => console.log('Chat clicked'),
            styles: {
              fontSize: '16px',
              color: '#A0AEC0',
              margin: '0 4px',
            },
          },
          {
            type: 'icon',
            iconName: 'x', // X (Twitter)
            tooltip: 'Twitter',
            action: () => console.log('Twitter clicked'),
            styles: {
              fontSize: '16px',
              color: '#A0AEC0',
              margin: '0 4px',
            },
          },
          {
            type: 'icon',
            iconName: 'discord',
            tooltip: 'Discord',
            action: () => console.log('Discord clicked'),
            styles: {
              fontSize: '16px',
              color: '#A0AEC0',
              margin: '0 8px',
            },
          },
          {
            type: 'button',
            text: 'Login',
            action: () => console.log('Login clicked'),
            styles: {
              backgroundColor: '#2D3748',
              color: 'white',
              padding: '4px 12px',
              margin: '0 4px',
              classList: ['rounded-md'],
            },
          },
          {
            type: 'button',
            text: 'Sign Up',
            action: () => console.log('Sign Up clicked'),
            styles: {
              backgroundColor: '#00FFD1',
              color: '#1A202C',
              padding: '4px 12px',
              margin: '0 4px',
              classList: ['rounded-md', 'font-semibold'],
            },
          },
        ],
      },
    ],
  };

  private listenToRouteData(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map(() => this.getDeepestChild(this.route)),
        map((route) => route.snapshot.data),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        this.headerType = data['headerType'] ?? null;
        this.isStickyHeader = !!data['isStickyHeader'];
      });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
