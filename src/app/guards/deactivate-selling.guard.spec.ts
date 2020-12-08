import { TestBed } from '@angular/core/testing';

import { DeactivateSellingGuard } from './deactivate-selling.guard';

describe('DeactivateSellingGuard', () => {
  let guard: DeactivateSellingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateSellingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
