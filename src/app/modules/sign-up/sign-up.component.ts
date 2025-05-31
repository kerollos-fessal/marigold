import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { passwordMatchValidator } from 'src/app/shared/validators/match-passwords';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],

  imports: [CommonModule, NavbarComponent , FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatButtonModule , MatInputModule],
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
      this.initSignupForm();
  }

  initSignupForm(){
this.signUpForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return
    } else {
      console.log('Form submitted:', this.signUpForm.value);
    }
  }
}
