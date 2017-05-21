import { TestBed, inject } from '@angular/core/testing';

import { SystemCompanyService } from './system-company.service';

describe('SystemCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemCompanyService]
    });
  });

  it('should be created', inject([SystemCompanyService], (service: SystemCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
