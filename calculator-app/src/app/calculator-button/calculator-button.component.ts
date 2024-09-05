import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
})
export class CalculatorButtonComponent {
  @Input() label = '';

  handleClick() {
    console.log(`${this.label} clicked!`);
  }
}
