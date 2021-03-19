import { TestBed } from '@angular/core/testing';

import { AuthRoutGuard } from './auth-rout.guard';

describe('AuthRoutGuard', () => {
  let guard: AuthRoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
