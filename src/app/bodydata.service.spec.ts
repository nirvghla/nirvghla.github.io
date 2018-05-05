import { TestBed, inject } from '@angular/core/testing';

import { BodydataService } from './bodydata.service';

describe('BodyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodydataService]
    });
  });

  it('should be created', inject([BodydataService], (service: BodydataService) => {
    expect(service).toBeTruthy();
  }));
});
