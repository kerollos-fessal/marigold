import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CompletedOrderComponent } from './components/completed-order/completed-order.component';

const routes: Routes = [
       { path: '', component: CheckoutComponent },
       { path: 'payment', component: PaymentComponent },
       { path: 'order-completed', component: CompletedOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
