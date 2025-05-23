import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProfileComponent,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
