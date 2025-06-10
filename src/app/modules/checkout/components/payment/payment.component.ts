import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { OrderSummaryComponent } from 'src/app/shared/components/order-summary/order-summary.component';
import { ChoosePaymentComponent } from '../choose-payment/choose-payment.component';

@Component({
  selector: 'app-payment',
  imports: [HeaderComponent, OrderSummaryComponent, ChoosePaymentComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
