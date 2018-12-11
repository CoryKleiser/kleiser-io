import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

import {StackoverflowInfo} from '../types/stackoverflow-info';

@Injectable()
export class StackoverflowService {

  constructor(private http: HttpClient) { }

  private fetchFromStackoverflow(method: string = ''): Observable<any> {
    const url = `https://api.stackexchange.com/2.2/users/6713829/${method}?site=stackoverflow`;
    return this.http.get(url);
  }

  getUserInfo(): Observable<StackoverflowInfo> {
    return this.fetchFromStackoverflow();
  }

  getTopTags(): Observable<StackoverflowInfo> {
    return this.fetchFromStackoverflow('top-tags');
  }

}
