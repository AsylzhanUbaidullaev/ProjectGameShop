import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAccComponent } from './buy-acc.component';

describe('BuyAccComponent', () => {
  let component: BuyAccComponent;
  let fixture: ComponentFixture<BuyAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
