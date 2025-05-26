import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  quantity: number = 1;

  updateQuantity(increase: boolean): void {
    if(increase){
      this.quantity++
    }else{
      if (this.quantity ===1){
        this.quantity = 1;
         return;
        }
        this.quantity--;
    }
  }
}
