import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocSellingComponent } from './coc-selling.component';

describe('CocSellingComponent', () => {
  let component: CocSellingComponent;
  let fixture: ComponentFixture<CocSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
