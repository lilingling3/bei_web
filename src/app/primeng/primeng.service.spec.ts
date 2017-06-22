import { TestBed, inject } from '@angular/core/testing';

import { PrimengService } from './primeng.service';

describe('PrimengService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimengService]
    });
  });

  it('should be created', inject([PrimengService], (service: PrimengService) => {
    expect(service).toBeTruthy();
  }));
});
