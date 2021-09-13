import { TestBed } from '@angular/core/testing';

import { FacetecService } from './facetec.service';

describe('FacetecService', () => {
  let service: FacetecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacetecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
