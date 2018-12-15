import {TestBed, inject, getTestBed} from '@angular/core/testing';

import { GithubService } from './github.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('GithubService', () => {
  let injector: TestBed;
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    injector = getTestBed();
    service = injector.get(GithubService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', inject([GithubService], () => {
    expect(service).toBeTruthy();
  }));
});
