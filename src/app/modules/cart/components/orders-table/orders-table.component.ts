import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { TableProduct } from 'src/app/shared/models/cart/table-product.interface';
@Component({
  selector: 'app-orders-table',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent {
  displayedColumns: string[] = ['deletion', 'Product', 'Price', 'Quantity', 'Subtotal'];
  dataSource: TableProduct[] = [
    {
      id: 1,
      name: 'Nail Polish',
      category: 'Skin care',
      price: 75,
      quantity: 1,
      subtotal: 75,
      src: './assets/images/product.png'
    },
    {
      id: 2,
           name: 'Nail Polish',
      category: 'Skin care',
      price: 45,
      quantity: 1,
      subtotal: 45,
      src: './assets/images/product.png'
    },
    {
      id: 3,
           name: 'Nail Polish',
      category: 'Skin care',
      price: 82,
      quantity: 1,
      subtotal: 82,
      src: './assets/images/product.png'
    }
  ];

   deleteRow(id: number): void {
    this.dataSource = this.dataSource.filter(item => item.id !== id);
  }

  updateQuantity(id: number, increase: boolean): void {
    this.dataSource = this.dataSource.map(item => {
      if (item.id === id) {
        let newQuantity = increase ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity
        };
      }
      return item;
    });
  }
}
