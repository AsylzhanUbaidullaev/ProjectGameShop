import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashofclansComponent } from './clashofclans.component';

describe('ClashofclansComponent', () => {
  let component: ClashofclansComponent;
  let fixture: ComponentFixture<ClashofclansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClashofclansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClashofclansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
