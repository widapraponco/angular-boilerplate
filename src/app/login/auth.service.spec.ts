import { TestBed } from '@angular/core/testing';

import { AuthSocialService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSocialService = TestBed.get(AuthSocialService);
    expect(service).toBeTruthy();
  });
});
