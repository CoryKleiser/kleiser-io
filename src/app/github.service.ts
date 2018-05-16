import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  private fetchFromGitHub(endpoint: string): Observable<object> {
    const url = `https://api.github.com${endpoint}`;
    return this.http.get(url);
  }

  getUserProfile(user: string): Observable<object> {
    return this.fetchFromGitHub(`/users/${user}`);
  }

  getUserRepos(user: string): Observable<object> {
    return this.fetchFromGitHub(`/users/${user}/repos`);
  }

}
