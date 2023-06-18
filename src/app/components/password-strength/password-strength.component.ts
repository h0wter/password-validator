import { Component } from '@angular/core';
import { passwordStrengthConfig } from './password-strength.config';

interface Types {
  hasDigits?: boolean;
  hasLetters?: boolean;
  hasSymbols?: boolean;
}

type passwordStrengthType = 'empty' | 'easy' | 'short' | 'medium' | 'strong';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  password = '';
  passwordStrength: passwordStrengthType = 'empty';
  isVisible = false;

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

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

  validatePassword() {
    const password = this.password.trim();
    const typesCount = this.typesCount(password);

    if (password === '') {
      this.passwordStrength = 'empty';
    } else if (password.length < 8) {
      this.passwordStrength = 'short';
    } else if (typesCount === 1) {
      this.passwordStrength = 'easy';
    } else if (typesCount === 2) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'strong';
    }
  }

  isDigit(char: string): boolean {
    return /\d/.test(char);
  }

  isLetter(char: string): boolean {
    return /[a-zA-Z]/.test(char);
  }

  getColorClass(position: 'left' | 'middle' | 'right'): string {
    return passwordStrengthConfig[position][this.passwordStrength];
  }
}
