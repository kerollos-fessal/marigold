import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
@Input() btnTitle :string = 'Proceed to Check out';
@Input() route :string = 'checkout'; // checkout - payment  - finishOrder
}
