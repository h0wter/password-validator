import { Component, inject } from '@angular/core';
import { PasswordValidatorService } from 'src/app/services/password-validator.service';
import { PasswordStrengthType } from 'src/app/types/password-types';
import { IndicatorColorsService } from 'src/app/services/indicator-colors.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  private _labelsCount = 5;
  private _passwordService = inject(PasswordValidatorService);
  private _password = '';
  private _passwordStrength: PasswordStrengthType = 'empty';
  colorsService = inject(IndicatorColorsService);
  labelsIndexArray = this.getIndexArray();

  set password(value: string) {
    this._password = value;
    this._passwordStrength = this._passwordService.validate(
      this._password,
      this.labelsIndexArray.length
    );
  }

  getColorClass() {
    return this.colorsService.getColorsArray(this._passwordStrength);
  }

  switchLabelsMode() {
    if (this._labelsCount === 3) {
      this._labelsCount = 5;
      this.labelsIndexArray = this.getIndexArray();
    } else {
      this._labelsCount = 3;
      this.labelsIndexArray = this.getIndexArray();
    }
  }

  getIndexArray() {
    return Array.from({ length: this._labelsCount }, (_, index) => index);
  }
}
