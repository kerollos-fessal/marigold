import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ManageAddressComponent } from './components/manage-address/manage-address.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'manage-address', component: ManageAddressComponent },
      { path: 'payment-method', component: PaymentMethodComponent },
      { path: 'password-management', component: PasswordManagementComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
