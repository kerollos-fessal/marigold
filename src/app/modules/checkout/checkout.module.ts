import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CheckoutComponent,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
