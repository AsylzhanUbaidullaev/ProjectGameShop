import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrSellingComponent } from './cr-selling.component';

describe('CrSellingComponent', () => {
  let component: CrSellingComponent;
  let fixture: ComponentFixture<CrSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
