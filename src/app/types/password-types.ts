export interface CharTypes {
  hasDigits?: boolean;
  hasLetters?: boolean;
  hasSymbols?: boolean;
}

export type PasswordStrengthType =
  | 'empty'
  | 'veryShort'
  | 'short'
  | 'easy'
  | 'medium'
  | 'strong'
  | 'veryStrong'
  | 'extremelyStrong';
