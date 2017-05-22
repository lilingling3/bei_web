import { TestBed, inject } from '@angular/core/testing';

import { RightServiceService } from './right-service.service';

describe('RightServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightServiceService]
    });
  });

  it('should be created', inject([RightServiceService], (service: RightServiceService) => {
    expect(service).toBeTruthy();
  }));
});
