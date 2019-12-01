import { TestBed } from '@angular/core/testing';

import { AanmeldingService } from './aanmelding.service';

describe('AanmeldingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AanmeldingService = TestBed.get(AanmeldingService);
    expect(service).toBeTruthy();
  });
});
