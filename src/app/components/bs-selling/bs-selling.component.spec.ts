import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSellingComponent } from './bs-selling.component';

describe('BsSellingComponent', () => {
  let component: BsSellingComponent;
  let fixture: ComponentFixture<BsSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
