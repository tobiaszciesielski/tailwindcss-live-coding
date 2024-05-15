import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'layout',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (m) => m.LayoutComponent,
      ),
  },
  {
    path: 'dynamic-values',
    loadComponent: () =>
      import('./components/dynamic-values/dynamic-values.component').then(
        (m) => m.DynamicValuesComponent,
      ),
  },
  {
    path: 'buttons',
    loadComponent: () =>
      import('./components/buttons/buttons.component').then(
        (m) => m.ButtonsComponent,
      ),
  },
  {
    path: 'animations',
    loadComponent: () =>
      import('./components/animations/animations.component').then(
        (m) => m.AnimationsComponent,
      ),
  },
];
