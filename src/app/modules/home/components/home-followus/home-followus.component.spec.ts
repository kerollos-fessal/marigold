import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFollowusComponent } from './home-followus.component';

describe('HomeFollowusComponent', () => {
  let component: HomeFollowusComponent;
  let fixture: ComponentFixture<HomeFollowusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFollowusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFollowusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
