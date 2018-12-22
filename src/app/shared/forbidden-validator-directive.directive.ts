import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';


@Directive({
  selector: '[appForbiddenInput]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenInput') forbiddenInput: string;

  validate(control: AbstractControl): {[key: string]: any} {
    if (this.forbiddenInput) {
      return this.forbiddenInputValidator(new RegExp(this.forbiddenInput, 'i'))(control);
    }
  }

  forbiddenInputValidator(inputRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = inputRe.test(control.value);
      return forbidden ? {'forbiddenInput': {value: control.value}} : null;
    };
  }
}
