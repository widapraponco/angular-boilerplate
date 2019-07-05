import { TestBed } from '@angular/core/testing';

import { FormcdataService } from './formcdata.service';

describe('FormcdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormcdataService = TestBed.get(FormcdataService);
    expect(service).toBeTruthy();
  });
});
