import { Component, Input, inject } from '@angular/core';
import { PasswordValidatorService } from 'src/app/services/password-validator.service';
import { PasswordStrengthType } from 'src/app/types/password-types';
import { IndicatorColorsService } from 'src/app/services/indicator-colors.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  private labelsCount = 3;
  private _passwordService = inject(PasswordValidatorService);
  private _password = '';
  private _passwordStrength: PasswordStrengthType = 'empty';
  colorsService = inject(IndicatorColorsService);
  labelsIndexArray = Array.from(
    { length: this.labelsCount },
    (_, index) => index
  );
  isVisible = false;

  set password(value: string) {
    this._password = value;
    this._passwordStrength = this._passwordService.validate(
      this._password,
      this.labelsIndexArray.length
    );
  }

  togglePasswordVisible(): void {
    this.isVisible = !this.isVisible;
  }

  getColorClass() {
    return this.colorsService.getColorsArray(this._passwordStrength);
  }
}
