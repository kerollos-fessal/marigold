import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { OrderSummaryComponent } from 'src/app/shared/components/order-summary/order-summary.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [HeaderComponent, OrderSummaryComponent , OrdersTableComponent],
})
export class CartComponent {}
