
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  template: `
    <img [src]="data.imageUrl" class="maximized-image" alt="Maximized product view">
  `,
  styles: [`
    .maximized-image {
      max-width: 100%;
      width: 40vw;
      max-height: 80vh;
      display: block;
      margin: 0 auto;
              @media (max-width: 768px) {
        width: 50vw;
     }
                 @media (max-width: 568px) {
        width: 90vw;
     }
    }
  `]
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) {}
}