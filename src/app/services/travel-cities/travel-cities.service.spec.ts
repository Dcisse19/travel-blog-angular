import { TestBed } from '@angular/core/testing';

import { TravelCitiesService } from './travel-cities.service';

describe('TravelCitiesService', () => {
  let service: TravelCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
