import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ContactUsComponent,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
