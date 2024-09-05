import { Injectable } from '@angular/core';
import { Button } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  buttons: Button[] = [
    { value: 'AC', type: 'operator' },
    { value: '+/-', type: 'operator' },
    { value: '%', type: 'operator' },
    { value: '÷', type: 'operator' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: 'X', type: 'operator' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '-', type: 'operator' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '+', type: 'operator' },
    { value: '0', type: 'number' },
    { value: '.', type: 'floating point' },
    { value: '=', type: 'operator' },
  ];
}
