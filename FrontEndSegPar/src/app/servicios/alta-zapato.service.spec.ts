import { TestBed } from '@angular/core/testing';

import { AltaZapatoService } from './alta-zapato.service';

describe('AltaZapatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AltaZapatoService = TestBed.get(AltaZapatoService);
    expect(service).toBeTruthy();
  });
});
