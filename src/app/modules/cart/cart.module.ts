import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CartComponent,
    CartRoutingModule
  ]
})
export class CartModule { }
