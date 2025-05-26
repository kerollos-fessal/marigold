import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/products/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from 'src/app/shared/components/image-dialog/image-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() product!: Product;

constructor(private dialog: MatDialog , private router: Router) {}

 maximize(): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl: this.product.mainImage },
      panelClass: 'image-dialog-container',
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }

  productDetails(productId: string){
    this.router.navigate(['shop/' + productId + '/details'])
  }
}
