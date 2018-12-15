import {TestBed, inject, getTestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StackoverflowService } from './stackoverflow.service';
import {StackoverflowInfo} from '../types/stackoverflow-info';

describe('StackoverflowService', () => {
  let injector: TestBed;
  let service: StackoverflowService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StackoverflowService]
    });
    injector = getTestBed();
    service = injector.get(StackoverflowService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([StackoverflowService], () => {
    expect(service).toBeTruthy();
  }));

  describe('#getUserInfo', () => {
    it('should return an Observable<StackoverflowInfo>', () => {
      const dummyUser: StackoverflowInfo = {
        items: [{
          badge_counts: {bronze: 18, silver: 5, gold: 2},
          account_id: 9007978,
          is_employee: false,
          last_modified_date: 1535682914,
          last_access_date: 1544479977,
          reputation_change_year: 1379,
          reputation_change_quarter: 0,
          reputation_change_month: 0,
          reputation_change_week: 0,
          reputation_change_day: 0,
          reputation: 1480,
          creation_date: 1471139295,
          user_type: 'registered',
          user_id: 6713829,
          location: 'Remote',
          website_url: 'http://www.kleiser.io',
          link: 'https://stackoverflow.com/users/6713829/cory-kleiser',
          profile_image: 'https://lh6.googleusercontent.com/-Ze4QsHGadfw/AAAAAAAAAAI/AAAAAAAABaI/2dGHraiIlPQ/photo.jpg?sz=128',
          display_name: 'Cory Kleiser'
        }], has_more: false, quota_max: 300, quota_remaining: 149
      };

      service.getUserInfo().subscribe((data: StackoverflowInfo) => {
        expect(data.items.length === 1);
        expect(data.items[0].displayName === 'Cory Kleiser');
      });

      const req = httpMock.expectOne('https://api.stackexchange.com/2.2/users/6713829/?site=stackoverflow');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);

    });

  });

  describe('#getTopTags', () => {
    it('should return an Observable<StackoverflowInfo>', () => {
      const dummyTopTags: StackoverflowInfo = {
        items: [{
          user_id: 6713829,
          answer_count: 56,
          answer_score: 62,
          question_count: 0,
          question_score: 0,
          tag_name: 'javascript'
        }, {
          user_id: 6713829,
          answer_count: 26,
          answer_score: 17,
          question_count: 0,
          question_score: 0,
          tag_name: 'html'
        }, {
          user_id: 6713829,
          answer_count: 16,
          answer_score: 12,
          question_count: 0,
          question_score: 0,
          tag_name: 'css'
        }, {
          user_id: 6713829,
          answer_count: 12,
          answer_score: 10,
          question_count: 0,
          question_score: 0,
          tag_name: 'jquery'
        }, {
          user_id: 6713829,
          answer_count: 0,
          answer_score: 0,
          question_count: 4,
          question_score: 7,
          tag_name: 'perl'}],
        has_more: true,
        quota_max: 300,
        quota_remaining: 148
      };

      service.getTopTags().subscribe((data: StackoverflowInfo) => {
        expect(data.items.length).toBe(5);
        expect(data.items[0].tag_name).toBe('javascript');
      });

      const req = httpMock.expectOne('https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow');
      expect(req.request.method).toBe('GET');
      req.flush(dummyTopTags);
    });
  });

});
