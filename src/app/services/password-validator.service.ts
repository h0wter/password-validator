import { Injectable } from '@angular/core';

interface Types {
  hasDigits?: boolean;
  hasLetters?: boolean;
  hasSymbols?: boolean;
}

type passwordStrengthType = 'empty' | 'easy' | 'short' | 'medium' | 'strong';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidatorService {
  validate(value: string): passwordStrengthType {
    const password = value.trim();
    const typesCount = this.typesCount(password);

    if (password === '') {
      return 'empty';
    } else if (password.length < 8) {
      return 'short';
    } else if (typesCount === 1) {
      return 'easy';
    } else if (typesCount === 2) {
      return 'medium';
    } else {
      return 'strong';
    }
  }

  private typesCount(password: string): number {
    const types: Types = {};

    for (let char of password) {
      if (this.isDigit(char)) {
        types.hasDigits = true;
      } else if (this.isLetter(char)) {
        types.hasLetters = true;
      } else {
        types.hasSymbols = true;
      }
    }

    const typesLength = Object.keys(types).length;
    return typesLength;
  }

  private isDigit(char: string): boolean {
    return /\d/.test(char);
  }

  private isLetter(char: string): boolean {
    return /[a-zA-Z]/.test(char);
  }
}
