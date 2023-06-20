import { Component, inject } from '@angular/core';
import { passwordStrengthConfig } from './password-strength.config';
import { PasswordValidatorService } from 'src/app/services/password-validator.service';
import {
  PasswordStrengthType,
  PositionType,
} from 'src/app/types/password-types';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  private _password = '';
  private _passwordService = inject(PasswordValidatorService);
  private _passwordStrength: PasswordStrengthType = 'empty';
  labels: PositionType[] = ['left', 'middle', 'right'];
  isVisible = false;

  set password(value: string) {
    this._password = value;
    this._passwordStrength = this._passwordService.validate(this._password);
  }

  togglePasswordVisible(): void {
    this.isVisible = !this.isVisible;
  }

  getColorClass(position: 'left' | 'middle' | 'right'): string {
    return passwordStrengthConfig[position][this._passwordStrength];
  }
}
