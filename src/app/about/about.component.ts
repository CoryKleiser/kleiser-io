import { Component, OnInit } from '@angular/core';

import { StackoverflowService } from '../stackoverflow.service';
import { GithubService } from '../github.service';
import { StackoverflowUser } from '../stackoverflow-user';
import {StackoverflowTags} from '../stackoverflow-tags';
import {GithubUser} from '../github-user';
import {GithubRepo} from '../github-repo';
import {Observable} from 'rxjs/Observable';
import {filter, map} from 'rxjs/operators';
import {StackoverflowFacade} from '../state/stackoverflow/stackoverflow.facade';
import {StackoverflowInfo} from '../stackoverflow-info';
import {GithubFacade} from '../state/github/github.facade';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  soUserInfo$: Observable<StackoverflowUser[]>;
  soTopTags$: Observable<StackoverflowTags[]>;
  githubUserInfo$: Observable<GithubUser>;
  githubRepos$: Observable<GithubRepo[]>;
  totalRepos: number;


  constructor(
    private soService: StackoverflowService,
    private githubService: GithubService,
    private ghFacade: GithubFacade,
    private soFacade: StackoverflowFacade) {
      this.soUserInfo$ = soFacade.userData$.pipe(
        map((userData: StackoverflowInfo) => userData.items)
      );
      this.soTopTags$ = soFacade.topTags$.pipe(
        map((topTags: StackoverflowInfo) => topTags.items)
      );
      this.githubUserInfo$ = ghFacade.userInfo$;
      this.githubRepos$ = ghFacade.userRepos$.pipe(
        map((repos: GithubRepo[]) => repos.filter((repo: GithubRepo) => repo.watchers > 0))
      );
      this.githubRepos$.subscribe(repos => {
        this.totalRepos = repos.length;
      });
    }

  ngOnInit() {
    this.fetchSoUserInfo();
    this.fetchSoTopTags();
    this.fetchGithubProfile();
    this.fetchGithubRepos();
  }

  fetchSoUserInfo(): void {
    this.soFacade.getStackoverflowUserInfo();
  }

  fetchSoTopTags(): void {
    this.soFacade.getStackoverflowTopTags();
  }

  fetchGithubProfile(): void {
    this.ghFacade.getGithubUserInfo('corykleiser');
  }

  fetchGithubRepos(): void {
    this.ghFacade.getGithubUserRepos('corykleiser');
  }

}
