import { TestBed, inject } from '@angular/core/testing';

import { TestHttpService } from './test-http.service';

describe('TestHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestHttpService]
    });
  });

  it('should be created', inject([TestHttpService], (service: TestHttpService) => {
    expect(service).toBeTruthy();
  }));
});
