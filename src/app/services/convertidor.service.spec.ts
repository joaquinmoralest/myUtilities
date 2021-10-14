import { TestBed } from '@angular/core/testing';

import { MonedasService } from './convertidor.service';

describe('ConvertidorService', () => {
  let service: MonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
