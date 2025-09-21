import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('remote', './Component').then((m) => m.App),
  },
];
