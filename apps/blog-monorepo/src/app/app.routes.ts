import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@blog-monorepo/shell-blog-main-container').then(
        (m) => m.ShellRoutesBlogMainContainer
      ),
  },
];
