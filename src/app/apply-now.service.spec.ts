/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplyNowService } from './apply-now.service';

describe('Service: ApplyNow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplyNowService]
    });
  });

  it('should ...', inject([ApplyNowService], (service: ApplyNowService) => {
    expect(service).toBeTruthy();
  }));
});
