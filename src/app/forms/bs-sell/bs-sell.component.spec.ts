import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSellComponent } from './bs-sell.component';

describe('BsSellComponent', () => {
  let component: BsSellComponent;
  let fixture: ComponentFixture<BsSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
