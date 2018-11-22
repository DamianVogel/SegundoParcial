import { TestBed } from '@angular/core/testing';

import { AltaWebService } from './alta-web.service';

describe('AltaWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AltaWebService = TestBed.get(AltaWebService);
    expect(service).toBeTruthy();
  });
});
