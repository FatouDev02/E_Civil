import { TestBed } from '@angular/core/testing';

import { ActenService } from './acten.service';

describe('ActenService', () => {
  let service: ActenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
