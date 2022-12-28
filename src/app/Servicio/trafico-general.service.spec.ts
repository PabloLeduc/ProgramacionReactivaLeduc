import { TestBed } from '@angular/core/testing';

import { TraficoGeneralService } from './trafico-general.service';

describe('TraficoGeneralService', () => {
  let service: TraficoGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraficoGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
