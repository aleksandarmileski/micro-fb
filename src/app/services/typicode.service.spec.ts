import { TestBed } from '@angular/core/testing';

import { TypicodeService } from './typicode.service';

describe('TypicodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypicodeService = TestBed.get(TypicodeService);
    expect(service).toBeTruthy();
  });
});
