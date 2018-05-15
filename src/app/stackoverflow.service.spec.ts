import { TestBed, inject } from '@angular/core/testing';

import { StackoverflowService } from './stackoverflow.service';

describe('StackoverflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackoverflowService]
    });
  });

  it('should be created', inject([StackoverflowService], (service: StackoverflowService) => {
    expect(service).toBeTruthy();
  }));
});
