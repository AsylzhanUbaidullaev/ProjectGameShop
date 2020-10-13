import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrawlstarsComponent } from './brawlstars.component';

describe('BrawlstarsComponent', () => {
  let component: BrawlstarsComponent;
  let fixture: ComponentFixture<BrawlstarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrawlstarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrawlstarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
