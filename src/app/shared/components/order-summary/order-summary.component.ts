import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
@Input() btnTitle :string = 'Proceed to Check out';
@Input() route :string = 'checkout'; // checkout - payment  - finishOrder

constructor(private router: Router){}

proceed(){
  switch(this.route){

    case 'checkout' :
    this.router.navigate(['/checkout']);
    break;
    case 'payment' :
    this.router.navigate(['/checkout/payment']);
    break;
  case 'finishOrder' :
    this.router.navigate(['/checkout/order-completed']);
  break;
  default :
  this.router.navigate(['/checkout']);
  }
}
}
