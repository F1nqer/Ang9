import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShowingComponent } from './order-showing.component';

describe('OrderShowingComponent', () => {
  let component: OrderShowingComponent;
  let fixture: ComponentFixture<OrderShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
