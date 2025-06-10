import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { OrderInfo } from 'src/app/shared/models/orders/order-info.interface';

@Component({
  selector: 'app-completed-order',
  imports: [HeaderComponent],
  templateUrl: './completed-order.component.html',
  styleUrl: './completed-order.component.scss'
})
export class CompletedOrderComponent {
  order: OrderInfo = {
    orderId: '#SDGT1254FD',
    paymentMethod: 'Paypal',
    transactionId: 'TR542SS',
    deliveryDate: '2 January 2025 ',
  };
}
