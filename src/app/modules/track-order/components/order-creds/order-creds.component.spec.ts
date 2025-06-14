import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCredsComponent } from './order-creds.component';

describe('OrderCredsComponent', () => {
  let component: OrderCredsComponent;
  let fixture: ComponentFixture<OrderCredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCredsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
