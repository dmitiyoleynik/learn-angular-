import { Component } from '@angular/core';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CommonModule } from '@angular/common';
import {
  Button,
  ButtonHandlers,
  CalculatorNumber,
  CalculatorOperator,
  FloatingPoint,
  OperatoHandlers,
} from '../../types';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CalculatorDisplayComponent,
    CalculatorButtonComponent,
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  buttons: Button[] = [];
  selectedOperator = '';
  leftValue = '0';
  rightValue = '0';
  displayValue = this.selectedOperator ? this.rightValue : this.leftValue;

  constructor(private calculatorService: CalculatorService) {
    this.buttons = calculatorService.buttons;
  }

  set currentValue(newValue: string) {
    if (!this.selectedOperator) {
      this.leftValue = newValue;
    } else {
      this.rightValue = newValue;
    }
  }

  get currentValue() {
    return !this.selectedOperator ? this.leftValue : this.rightValue;
  }

  operatorHandlers: OperatoHandlers = {
    AC: () => {
      this.leftValue = '0';
      this.rightValue = '0';
      this.selectedOperator = '';
    },
    '+/-': () => {
      this.currentValue = `${-this.currentValue}`;
    },
    '%': () => {
      this.currentValue = `${+this.currentValue / 100}`;
    },
    '÷': () => {
      this.selectedOperator = '/';
    },
    X: () => {
      this.selectedOperator = '*';
    },
    '-': () => {
      this.selectedOperator = '-';
    },
    '+': () => {
      this.selectedOperator = '+';
    },
    '=': () => {
      const equation = this.leftValue + this.selectedOperator + this.rightValue;
      this.selectedOperator = '';
      this.rightValue = '0';
      this.currentValue = eval(equation);
    },
  };

  eventHandlers: ButtonHandlers = {
    number: (value: string) => {
      this.currentValue =
        this.currentValue !== '0' ? this.currentValue + value : value;
    },
    operator: (value: CalculatorOperator) => {
      this.operatorHandlers[value]();
    },
    'floating point': () => {
      if (!this.currentValue.includes('.')) this.currentValue += '.';
    },
  };

  updateDisplay() {
    this.displayValue = this.currentValue;
  }

  onButtonClick({ type, value }: Button) {
    if (type === 'number') {
      this.eventHandlers[type](value as CalculatorNumber);
    } else if (type === 'operator') {
      this.eventHandlers[type](value as CalculatorOperator);
    } else if (type === 'floating point') {
      this.eventHandlers[type](value as FloatingPoint);
    }

    this.updateDisplay();
  }
}
