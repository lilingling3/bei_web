import { TestBed, inject } from '@angular/core/testing';

import { PositionServiceService } from './position-service.service';

describe('PositionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionServiceService]
    });
  });

  it('should be created', inject([PositionServiceService], (service: PositionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
