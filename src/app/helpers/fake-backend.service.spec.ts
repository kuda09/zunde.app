/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeBackendService } from './fake-backend.service';

describe('Service: FakeBackend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeBackendService]
    });
  });

  it('should ...', inject([FakeBackendService], (service: FakeBackendService) => {
    expect(service).toBeTruthy();
  }));
});
