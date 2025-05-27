import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, HeaderComponent, FormsModule,  MatSelectModule,
    MatFormFieldModule, MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
quantity: number = 1;
  selectedSortOption: string = 'newest';
 currentRating = 0;
  selectedFile: File | null = null;

  reviewForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      rating: [0, [Validators.required, Validators.min(1)]],
      title: ['', Validators.required],
      details: ['', Validators.required],
      attachment: [null]
    });
  }
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


  onSortChange() {
    if (this.selectedSortOption === 'newest') {
      console.log('Sorting by Newest');
    } else if (this.selectedSortOption === 'oldest') {
      console.log('Sorting by Oldest');
    }
  }
 setRating(rating: number): void {
    this.currentRating = rating;
    this.reviewForm.patchValue({ rating });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }
      this.selectedFile = file;
      this.reviewForm.patchValue({ attachment: file });
    }
  }

  removeFile(): void {
    this.selectedFile = null;
    this.reviewForm.patchValue({ attachment: null });
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      const formData = new FormData();
      formData.append('rating', this.reviewForm.value.rating);
      formData.append('title', this.reviewForm.value.title);
      formData.append('details', this.reviewForm.value.details);
      if (this.selectedFile) {
        formData.append('attachment', this.selectedFile);
      }

      console.log('Form submitted:', formData);
    }
  }

}
