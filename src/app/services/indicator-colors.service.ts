import { Injectable } from '@angular/core';
import { PasswordStrengthType } from 'src/app/types/password-types';

const colors = {
  gray: 'bg-gray-300',
  red: 'bg-red-600',
  yellow: 'bg-yellow-500',
  green: 'bg-green-700',
  blue: 'bg-blue-700',
};

const colorArrays = {
  empty: [colors.gray, colors.gray, colors.gray, colors.gray, colors.gray],
  veryShort: [colors.red, colors.red, colors.red, colors.red, colors.red],
  short: [colors.red, colors.red, colors.red, colors.gray, colors.gray],
  easy: [colors.red, colors.gray, colors.gray, colors.gray, colors.gray],
  medium: [colors.yellow, colors.yellow, colors.gray, colors.gray, colors.gray],
  strong: [colors.green, colors.green, colors.green, colors.gray, colors.gray],
  veryStrong: [
    colors.green,
    colors.green,
    colors.green,
    colors.green,
    colors.green,
  ],
  extremelyStrong: [
    colors.blue,
    colors.blue,
    colors.blue,
    colors.blue,
    colors.blue,
  ],
};

@Injectable({
  providedIn: 'root',
})
export class IndicatorColorsService {
  getColorsArray = (strength: PasswordStrengthType): string[] => {
    return colorArrays[strength];
  };
}
