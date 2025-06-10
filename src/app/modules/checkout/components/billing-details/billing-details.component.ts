import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/models/profile/address.interface';

@Component({
  selector: 'app-billing-details',
    imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.scss'
})
export class BillingDetailsComponent {
 addressForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initAddressForm();
  }

  initAddressForm() {
    this.addressForm = this.fb.group({
      company: [''],
      country: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      paymentMethod: ['sameShippingAddress', Validators.required]
    });
  }

get shouldEnableSubmit(): boolean {
  const paymentMethod = this.addressForm.get('paymentMethod')!.value;
  return paymentMethod === 'sameShippingAddress' || this.addressForm.valid;
}

  onSubmit(): void {
      const formValue = this.addressForm.value;
console.log(formValue);

this.addressForm.reset();
    }
  }
