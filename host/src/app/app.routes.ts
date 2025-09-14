import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { Fallsback } from './components/fallsback/fallsback';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('remote', './Component')
        .then((m) => m.App)
        .catch((error) => {
          console.error('Error loading remote component', error);
          return Fallsback;
        }),
  },
];
