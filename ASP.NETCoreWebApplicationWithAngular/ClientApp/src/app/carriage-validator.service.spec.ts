import { TestBed } from '@angular/core/testing';

import { CarriageValidatorService } from './carriage-validator.service';

describe('CarriageValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarriageValidatorService = TestBed.get(CarriageValidatorService);
    expect(service).toBeTruthy();
  });
});
