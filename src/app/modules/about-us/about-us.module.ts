import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AboutUsComponent,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
