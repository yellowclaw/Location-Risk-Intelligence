import { TestBed } from '@angular/core/testing';

import { ElevationDataService } from './elevation-data.service';

describe('ProfileDataService', () => {
  let service: ElevationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
