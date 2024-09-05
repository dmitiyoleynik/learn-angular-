import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  standalone: true,
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.css',
})
export class CalculatorDisplayComponent {
  @Input() value = '';
}
