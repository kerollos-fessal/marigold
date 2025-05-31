import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!(control instanceof FormGroup)) {
    return null;
  }
  
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  
  return password === confirmPassword ? null : { passwordMismatch: true };
};