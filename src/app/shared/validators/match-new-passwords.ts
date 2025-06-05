import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const newPasswordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!(control instanceof FormGroup)) {
    return null;
  }
  
  const newPassword = control.get('newPassword')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  
  return newPassword === confirmPassword ? null : { passwordMismatch: true };
};