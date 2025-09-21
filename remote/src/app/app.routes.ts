// remote/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
];
