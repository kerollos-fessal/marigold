import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { OrderSummaryComponent } from 'src/app/shared/components/order-summary/order-summary.component';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],

  imports: [OrderSummaryComponent, HeaderComponent, BillingDetailsComponent],
})
export class CheckoutComponent {}
