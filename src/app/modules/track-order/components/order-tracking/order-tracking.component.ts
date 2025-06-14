import { CommonModule } from '@angular/common';
import { Component, inject, Input, ElementRef, ViewChild, AfterViewInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
@Component({
  selector: 'app-order-tracking',
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './order-tracking.component.html',
  styleUrl: './order-tracking.component.scss',
})
export class OrderTrackingComponent implements AfterViewInit, OnChanges {
  @Input() activeStep: number = 3;
  
  steps = [
    { label: 'Order Placed', image:'step1.svg', icon: 'primary-check.svg', date: '21 Jan 2025', time: '10:00 AM' },
    { label: 'Accepted', image:'step2.svg',  icon: 'primary-check.svg', date: '21 Jan 2025', time: '10:30 AM' },
    { label: 'In Progress', image:'step3.svg',  icon: 'white-check.svg', date: '21 Jan 2025', time: '11:00 AM' },
    { label: 'On the Way', image:'step4.svg',  icon: 'white-check.svg', date: '21 Jan 2025', time: '11:00 AM' },
    { label: 'Delivered', image:'step5.svg',  icon: 'white-check.svg', date: '21 Jan 2025', time: '11:00 AM' } 
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateStepHeaderClasses();
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeStep'] && !changes['activeStep'].firstChange) {
      setTimeout(() => {
        this.updateStepHeaderClasses();
      }, 50);
    }
  }

  updateStepHeaderClasses() {
    const stepHeaders = document.querySelectorAll('.static-stepper mat-step-header');
    
    stepHeaders.forEach((header, index) => {
      // Remove existing classes
      header.classList.remove('completed', 'pending', 'active');
      
      // Add appropriate class based on step state
      if (this.isCompleted(index)) {
        header.classList.add('completed');
      } else if (this.isStepPending(index)) {
        header.classList.add('pending');
      } else if (index === this.activeStep - 1) {
        header.classList.add('active');
      }
    });
  }

  isCompleted(stepIndex: number): boolean {
    return stepIndex < this.activeStep - 1;
  }

  isStepPending(stepIndex: number): boolean {
    return stepIndex > this.activeStep - 1;
  }
}
