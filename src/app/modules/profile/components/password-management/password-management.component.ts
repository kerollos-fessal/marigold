import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { newPasswordMatchValidator } from 'src/app/shared/validators/match-new-passwords';

@Component({
  selector: 'app-password-management',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './password-management.component.html',
  styleUrl: './password-management.component.scss'
})
export class PasswordManagementComponent implements OnInit{
 updatePasswordForm!: FormGroup;
  hidePassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initUpdateProfileForm();
  }

initUpdateProfileForm(){
    this.updatePasswordForm = this.fb.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: newPasswordMatchValidator });
}

onSubmit(): void {
    if (this.updatePasswordForm.valid) {
        console.log('Form submitted:', this.updatePasswordForm.value);
    }
}
}
