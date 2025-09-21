// remote/src/app/components/calculator/calculator.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'remote-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  result = 0;
}
