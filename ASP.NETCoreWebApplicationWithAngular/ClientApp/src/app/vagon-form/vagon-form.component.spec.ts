import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagonFormComponent } from './vagon-form.component';

describe('VagonFormComponent', () => {
  let component: VagonFormComponent;
  let fixture: ComponentFixture<VagonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
