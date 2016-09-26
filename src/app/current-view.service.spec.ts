/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentViewService } from './current-view.service';

describe('Service: CurrentView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentViewService]
    });
  });

  it('should ...', inject([CurrentViewService], (service: CurrentViewService) => {
    expect(service).toBeTruthy();
  }));
});
