import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { OrderCredsComponent } from './components/order-creds/order-creds.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],

  imports: [HeaderComponent, OrderCredsComponent, OrderTrackingComponent],
})
export class TrackOrderComponent {

  credsVerified: boolean = true;

    onCredsVerifiedChange(value: boolean): void {
    this.credsVerified = value;
    console.log('credsVerified updated:', this.credsVerified);
  }
}
