import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrSellComponent } from './cr-sell.component';

describe('CrSellComponent', () => {
  let component: CrSellComponent;
  let fixture: ComponentFixture<CrSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
