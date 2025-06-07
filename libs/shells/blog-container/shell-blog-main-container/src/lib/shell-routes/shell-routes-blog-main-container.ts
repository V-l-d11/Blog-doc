import { Route } from '@angular/router';

export const ShellRoutesBlogMainContainer: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import(
        './../shell-blog-main-container/shell-blog-main-container.component'
      ).then((m) => m.ShellBlogMainContainerComponent),
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        loadComponent: () =>
          import('@blog-monorepo/main-blog-feature').then(
            (m) => m.MainBlogFeatureComponent
          ),
      },
    ],
  },
];
