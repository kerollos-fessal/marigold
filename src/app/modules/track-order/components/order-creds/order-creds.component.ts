import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-creds',
   imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './order-creds.component.html',
  styleUrl: './order-creds.component.scss'
})

export class OrderCredsComponent {

  orderCredsForm!: FormGroup;
@Output() credsVerifiedChange = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initUOrderCredsFormForm();
  }

initUOrderCredsFormForm(){
    this.orderCredsForm = this.fb.group({
      orderId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
}

onSubmit(): void {
    if (this.orderCredsForm.valid) {
        console.log('Form submitted:', this.orderCredsForm.value);
        this.orderCredsForm.reset();
        this.credsVerifiedChange.emit(true);
    }
}
}
