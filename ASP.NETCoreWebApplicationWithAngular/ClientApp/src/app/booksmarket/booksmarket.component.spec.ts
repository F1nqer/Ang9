import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksmarketComponent } from './booksmarket.component';

describe('BooksmarketComponent', () => {
  let component: BooksmarketComponent;
  let fixture: ComponentFixture<BooksmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
