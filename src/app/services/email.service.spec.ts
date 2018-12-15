import {TestBed, inject, getTestBed} from '@angular/core/testing';

import { EmailService } from './email.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

let injector: TestBed;
let service: EmailService;
let httpMock: HttpTestingController;



describe('EmailService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmailService]
    });
    injector = getTestBed();
    service = injector.get(EmailService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([EmailService], () => {
    expect(service).toBeTruthy();
  }));
});
