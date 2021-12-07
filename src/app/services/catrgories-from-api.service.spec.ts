import { TestBed } from '@angular/core/testing';

import { CatrgoriesFromApiService } from './catrgories-from-api.service';

describe('CatrgoriesFromApiService', () => {
  let service: CatrgoriesFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatrgoriesFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
