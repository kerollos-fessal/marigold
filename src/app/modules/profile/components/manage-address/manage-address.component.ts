import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Address } from 'src/app/shared/models/profile/address.interface';

@Component({
  selector: 'app-manage-address',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './manage-address.component.html',
  styleUrl: './manage-address.component.scss',
})
export class ManageAddressComponent {
  addressForm!: FormGroup;
editMode: boolean =false;
 addresses: Address[] = [
    {
      firstName: 'Marain',
      lastName: 'Emad',
      company: 'ABC Corp',
      country: 'Egypt',
      street: '123 Mortada St',
      city: 'Alexandria',
      state: 'Alexandria',
      zipCode: '10001',
      phone: '01020878013',
      email: 'marian@gmail.com',
      fullAddress: '123 Mortada St, Alexandria, Alexandria 10001, Egypt'
    },
    {
      firstName: 'Mary',
      lastName: 'Gold',
      country: 'Egypt',
      street: '456 Janakles',
      city: 'Alexandria',
      state: 'Alexandria',
      zipCode: '21611',
      phone: '01228515178',
      email: 'mary.@gmail.com',
      fullAddress: '456 Janakles, Alexandria, Alexandria, Egypt'
    }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initAddressForm();
  }

  initAddressForm() {
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: [''],
      country: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  editAddress(index: number): void {
    this.editMode =true;
    const address = this.addresses[index];
    this.addressForm.patchValue({
      ...address
    });
    
    this.addressForm.markAsDirty();
  }

  deleteAddress(index: number): void {
  this.addresses.splice(index, 1);
}

  onSubmit(): void {
    if (this.addressForm.valid) {
      const formValue = this.addressForm.value;
      const fullAddress = `${formValue.street}, ${formValue.city}, ${formValue.state} ${formValue.zipCode}, ${formValue.country}`;
      
      const updatedAddress: Address = {
        ...formValue,
        fullAddress
      };
      this.addresses.push(updatedAddress);
this.addressForm.reset();
this.editMode =false;
      console.log('Updated Address:', updatedAddress);
    }
  }
}
