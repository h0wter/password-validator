# Password Validator
Deployed on [Vercel](https://password-validator-h0wter.vercel.app/)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Application Description:
The application allows you to check the strength of the password. Depending on the complexity of the password, the indicators below the field change color. Here are the password rules:
1. If the field is empty, all sections are gray;
2. If the field has less than 8 characters, all sections are red;
3. If the password consists only one of letters/digits/symbols - the first section is red the rest are gray;
4. If the password consists two different types of characters of letters/digits/symbols - the first two sections are yellow the last one is gray;
5. If the password consists all types of characters of letters/digits/symbols, all sections are green;

## Examples

<img src="./src/assets/empty-field..png">
<img src="./src/assets/one-type.png">
<img src="./src/assets/two-types.png">
<img src="./src/assets/three-types.png">

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
