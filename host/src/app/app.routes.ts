// host/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('remote', './Component').then((m) => m.App),
  },
  {
    path: 'counter',
    loadComponent: () =>
      loadRemoteModule('remote', './CounterComponent').then(
        (m) => m.CounterComponent
      ),
  },
];
