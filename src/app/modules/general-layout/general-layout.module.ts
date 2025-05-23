import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLayoutRoutingModule } from './general-layout-routing.module';
import { GeneralLayoutComponent } from './general-layout.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GeneralLayoutComponent,
    GeneralLayoutRoutingModule,
    RouterOutlet
  ]
})
export class GeneralLayoutModule { }
