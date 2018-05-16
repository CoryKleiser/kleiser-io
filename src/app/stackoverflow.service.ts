import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class StackoverflowService {

  constructor(private http: HttpClient) { }

  private fetchFromStackoverflow(method: string = ''): Observable<object> {
    const url = `https://api.stackexchange.com/2.2/users/6713829/${method}?site=stackoverflow`;
    return this.http.get(url);
  }

  getUserInfo(): Observable<object> {
    return this.fetchFromStackoverflow();
  }

  getTopTags(): Observable<object> {
    return this.fetchFromStackoverflow('top-tags');
  }

}
