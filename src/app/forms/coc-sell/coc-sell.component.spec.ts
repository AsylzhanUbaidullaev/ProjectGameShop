import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocSellComponent } from './coc-sell.component';

describe('CocSellComponent', () => {
  let component: CocSellComponent;
  let fixture: ComponentFixture<CocSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
