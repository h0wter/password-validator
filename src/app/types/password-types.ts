export interface CharTypes {
  hasDigits?: boolean;
  hasLetters?: boolean;
  hasSymbols?: boolean;
}

export type PasswordStrengthType =
  | 'empty'
  | 'easy'
  | 'short'
  | 'medium'
  | 'strong';

export type PositionType = 'left' | 'middle' | 'right';
