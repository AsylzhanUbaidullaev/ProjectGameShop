import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashroyaleComponent } from './clashroyale.component';

describe('ClashroyaleComponent', () => {
  let component: ClashroyaleComponent;
  let fixture: ComponentFixture<ClashroyaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClashroyaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClashroyaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
