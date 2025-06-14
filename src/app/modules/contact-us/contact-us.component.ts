import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],

 imports: [HeaderComponent, FormsModule, ReactiveFormsModule],
})
export class ContactUsComponent {

  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initContactUsForm();
  }

initContactUsForm(){
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
}


onSubmit(): void {
    if (this.contactUsForm.valid) {
        console.log('Form submitted:', this.contactUsForm.value);
    }
}
}
