import { TestBed } from '@angular/core/testing';

import { AuthitencationServiceService } from './authitencation-service.service';

describe('AuthitencationServiceService', () => {
  let service: AuthitencationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthitencationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
