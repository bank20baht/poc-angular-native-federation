// host/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule('remote', './AppRoutes').then((m) => m.routes),
  },
];
