import { Injectable } from '@angular/core';
import { CharTypes, PasswordStrengthType } from '../types/password-types';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidatorService {
  validate(value: string, indicatorsCount: number = 3): PasswordStrengthType {
    const password = value.trim();
    const typesCount = this.typesCount(password);

    switch (indicatorsCount) {
      case 3:
        switch (typesCount) {
          case 1:
            if (password.length < 8) {
              return 'short';
            } else {
              return 'easy';
            }
          case 2:
            if (password.length < 8) {
              return 'short';
            } else {
              return 'medium';
            }
          case 3:
            if (password.length < 8) {
              return 'short';
            } else {
              return 'strong';
            }
          default:
            return 'empty';
        }
      case 5:
        switch (typesCount) {
          case 1:
            if (password.length < 6) {
              return 'veryShort';
            } else if (password.length < 8) {
              return 'short';
            } else if (password.length < 10) {
              return 'easy';
            } else {
              return 'medium';
            }
          case 2:
            if (password.length < 6) {
              return 'short';
            } else if (password.length < 8) {
              return 'easy';
            } else if (password.length < 10) {
              return 'medium';
            } else if (password.length < 12) {
              return 'strong';
            } else {
              return 'veryStrong';
            }
          case 3:
            if (password.length < 6) {
              return 'easy';
            } else if (password.length < 8) {
              return 'medium';
            } else if (password.length < 10) {
              return 'strong';
            } else if (password.length < 12) {
              return 'veryStrong';
            } else {
              return 'extremelyStrong';
            }
          default:
            return 'empty';
        }
    }
    return 'empty';
  }

  private typesCount(password: string): number {
    const types: CharTypes = {};

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
    return /[a-zA-Zа-яА-Я]/.test(char);
  }
}
