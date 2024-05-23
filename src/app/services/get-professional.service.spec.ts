import { TestBed } from '@angular/core/testing';

import { GetProfessionalService } from './get-professional.service';

describe('GetProfessionalService', () => {
  let service: GetProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
