import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Address } from 'src/app/shared/models/profile/address.interface';

@Component({
  selector: 'app-payment-method',
  imports: [FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent {
  cardForm!: FormGroup;
todayDate = new Date();
selectedcard: boolean = false;
savedCards: { number: string; maskedNumber: string }[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initCardForm();
  }

initCardForm() {
  this.cardForm = this.fb.group({
    holderName: ['', Validators.required],
    cardNumber: [
      '', 
      [
        Validators.required,
        Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
      ]
    ],
    expiryDate: ['', Validators.required],
    cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    saveCard: [false],
  });
}

  deleteCard(index: number) {
    this.savedCards.splice(index, 1);
  }

 onSubmit() {
    if (this.cardForm.valid) {
      const cardNumber = this.cardForm.value.cardNumber;
      const maskedNumber = this.maskCardNumber(cardNumber);
      
      this.savedCards.push({
        number: cardNumber,
        maskedNumber: maskedNumber
      });

      this.cardForm.reset();
    }
  }

maskCardNumber(cardNumber: any): string {
  const cardStr = String(cardNumber || '').replace(/\D/g, '');
  const visibleDigits = 4;
  
  if (cardStr.length <= visibleDigits) return cardStr; 
  
  const masked = '*'.repeat(cardStr.length - visibleDigits) 
               + cardStr.slice(-visibleDigits);
  
  return masked.replace(/(.{4})/g, '$1 ').trim();
}
}
