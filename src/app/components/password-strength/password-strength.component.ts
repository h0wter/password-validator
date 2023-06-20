import { Component } from '@angular/core';
import { passwordStrengthConfig } from './password-strength.config';
import { PasswordValidatorService } from 'src/app/services/password-validator.service';

type passwordStrengthType = 'empty' | 'easy' | 'short' | 'medium' | 'strong';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  private _password = '';
  passwordStrength: passwordStrengthType = 'empty';
  isVisible = false;

  constructor(private passwordService: PasswordValidatorService) {}

  set password(value: string) {
    this._password = value;
    this.passwordStrength = this.passwordService.validate(this._password);
  }

  togglePasswordVisible(): void {
    this.isVisible = !this.isVisible;
  }

  getColorClass(position: 'left' | 'middle' | 'right'): string {
    return passwordStrengthConfig[position][this.passwordStrength];
  }
}
