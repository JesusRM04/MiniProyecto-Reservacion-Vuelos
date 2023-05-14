import { TestBed } from '@angular/core/testing';

import { RandomUserServiceService } from './random-user-service.service';

describe('RandomUserServiceService', () => {
  let service: RandomUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
