export type ButtonType = 'number' | 'operator' | 'floating point';

export type CalculatorNumber =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type CalculatorOperator =
  | 'AC'
  | '+/-'
  | '%'
  | '÷'
  | 'X'
  | '-'
  | '+'
  | '=';

export type FloatingPoint = '.';

export interface CalculatorValueMap {
  number: CalculatorNumber;
  operator: CalculatorOperator;
  'floating point': FloatingPoint;
}

export interface Button {
  type: ButtonType;
  value: CalculatorValueMap[ButtonType];
}

export type ButtonHandlers = {
  [K in ButtonType]: (value: CalculatorValueMap[K]) => void;
};

export type OperatoHandlers = Record<CalculatorOperator, () => void>;
