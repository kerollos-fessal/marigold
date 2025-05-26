import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Product } from 'src/app/shared/models/products/product.interface';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],

  imports: [
    HeaderComponent,
    ProductComponent,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ShopComponent {
  filterForm!: FormGroup;

  filterGroups = [
    {
      title: 'By Category',
      key: 'categories',
      options: [
        { label: 'Body Care', value: 'body' },
        { label: 'Hair Care', value: 'hair' },
        { label: 'Nails Care', value: 'nails' },
        { label: 'Lips', value: 'lips' },
        { label: 'Face', value: 'face' },
      ],
    },
    {
      title: 'By Skin Type',
      key: 'skinTypes',
      options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Oily', value: 'oily' },
        { label: 'Dry', value: 'dry' },
        { label: 'Combination', value: 'combination' },
        { label: 'Sensitive', value: 'sensitive' },
      ],
    },
    {
      title: 'Price',
      key: 'price',
      options: [
        { label: 'Less than 1000', value: 'less' },
        { label: 'More than 1500', value: 'more' },
      ],
    },
    {
      title: 'Reviews',
      key: 'reviews',
      options: [
        { label: '5', value: '5' },
        { label: '4', value: '4' },
        { label: '3', value: '3' },
      ],
    },
    {
      title: 'Availability',
      key: 'availability',
      options: [
        { label: 'In Stock', value: 'instock' },
        { label: 'Out of Stock', value: 'outofstock' },
      ],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.fb.group({});

    this.filterGroups.forEach((group) => {
      const controlArray = group.options.map(() => new FormControl(false));
      this.filterForm.addControl(group.key, this.fb.array(controlArray));
    });
  }

  getFormArray(key: string): FormArray<FormControl<boolean>> {
    return this.filterForm.get(key) as FormArray<FormControl<boolean>>;
  }

  getFormControls(key: string): FormControl<boolean>[] {
    return this.getFormArray(key).controls as FormControl<boolean>[];
  }

  onFilterChange() {
    const selectedFilters: any = {};

    this.filterGroups.forEach((group) => {
      const selectedOptions = this.getFormControls(group.key)
        .map((control, i) => (control.value ? group.options[i].value : null))
        .filter((value) => value !== null);

      if (selectedOptions.length > 0) {
        selectedFilters[group.key] = selectedOptions;
      }
    });

    console.log('Selected filters:', selectedFilters);
  }

  getStars(rating: number): any[] {
    return Array(5)
      .fill(0)
      .map((_, i) => ({
        filled: i < rating,
        value: i + 1,
      }));
  }

  products: Product[] = [
    {
      id: "1",
      name: 'Premium Body Lotion',
      price: 24.99,
      category: 'Body Care',
      rating: 5.0,
      inStock: true,
      mainImage: '/assets/images/product.png',
    },
    {
      id: "2",
      name: 'Nail Care Set',
      price: 19.99,
      category: 'Nails Care',
      rating: 4.5,
      inStock: true,
      mainImage: '/assets/images/product.png',
    },
    {
      id: "3",
      name: 'Nail Care ',
      price: 19.99,
      category: 'Body Care',
      rating: 4.5,
      inStock: true,
      mainImage: '/assets/images/product.png',
    },
    {
      id: "4",
      name: 'polish Care Set',
      price: 19.99,
      category: 'Nails Care',
      rating: 4.5,
      inStock: true,
      mainImage: '/assets/images/product.png',
    },
    {
      id: "5",
      name: 'Hair Care',
      price: 19.99,
      category: 'Nails Care',
      rating: 4.5,
      inStock: true,
      mainImage: '/assets/images/product.png',
    },
  ];
}
