import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLayoutRoutingModule } from './general-layout-routing.module';
import { GeneralLayoutComponent } from './general-layout.component';


@NgModule({
  declarations: [
    GeneralLayoutComponent
  ],
  imports: [
    CommonModule,
    GeneralLayoutRoutingModule
  ]
})
export class GeneralLayoutModule { }
