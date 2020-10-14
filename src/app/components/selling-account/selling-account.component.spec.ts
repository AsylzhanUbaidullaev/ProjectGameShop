import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingAccountComponent } from './selling-account.component';

describe('SellingAccountComponent', () => {
  let component: SellingAccountComponent;
  let fixture: ComponentFixture<SellingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
