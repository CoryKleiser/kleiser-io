import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {GithubUser} from '../types/github-user';
import {GithubRepo} from '../types/github-repo';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  private fetchFromGitHub(endpoint: string): Observable<any> {
    const url = `https://api.github.com${endpoint}`;
    return this.http.get(url);
  }

  getUserProfile(user: string): Observable<GithubUser> {
    return this.fetchFromGitHub(`/users/${user}`);
  }

  getUserRepos(user: string): Observable<Array<GithubRepo>> {
    return this.fetchFromGitHub(`/users/${user}/repos`);
  }

}
