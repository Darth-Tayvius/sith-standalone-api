import { TestBed } from '@angular/core/testing';

import { SithStandaloneApiLibService } from './sith-standalone-api-lib.service';

describe('SithStandaloneApiLibService', () => {
  let service: SithStandaloneApiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SithStandaloneApiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
