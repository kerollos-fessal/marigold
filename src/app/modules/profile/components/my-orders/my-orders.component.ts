import { Component } from '@angular/core';
import { OrderInfo } from 'src/app/shared/models/orders/order-info.interface';

@Component({
  selector: 'app-my-orders',
  imports: [],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
})
export class MyOrdersComponent {
  order: OrderInfo = {
    orderId: '#SDGT1254FD',
    paymentMethod: 'Paypal',
    transactionId: 'TR542SS',
    deliveryDate: '2 January 2025 ',
  };
}
