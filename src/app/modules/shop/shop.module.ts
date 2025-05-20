import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ShopComponent,
    ShopRoutingModule
  ]
})
export class ShopModule { }
