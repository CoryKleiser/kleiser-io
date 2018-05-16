import { Component, OnInit } from '@angular/core';

import { StackoverflowService } from '../stackoverflow.service';
import { GithubService } from '../github.service';
import { StackoverflowUser } from '../stackoverflow-user';
import {StackoverflowTags} from '../stackoverflow-tags';
import {GithubUser} from '../github-user';
import {GithubRepo} from '../github-repo';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  soUserInfo: StackoverflowUser;
  soTopTags: Array<StackoverflowTags>;
  githubUserInfo: GithubUser;
  githubRepos: Array<GithubRepo>;

  constructor(private soService: StackoverflowService,
              private githubService: GithubService) { }

  ngOnInit() {
    // this.showSoUserInfo();
    // this.showSoTopTags();
    this.showGithubProfile();
    this.showGithubRepos();
  }

  showSoUserInfo(): void {
    this.soService.getUserInfo()
      .subscribe(soUserInfo => this.soUserInfo = soUserInfo.items[0]);
  }

  showSoTopTags(): void {
    this.soService.getTopTags()
      .subscribe(soTopTags => this.soTopTags = soTopTags.items.slice(0, 4));
  }

  showGithubProfile(): void {
    this.githubService.getUserProfile('corykleiser')
      .subscribe(githubUserInfo => this.githubUserInfo = githubUserInfo);
  }

  showGithubRepos(): void {
    this.githubService.getUserRepos('corykleiser')
      .subscribe(githubRepos => this.githubRepos = githubRepos.filter(repo => repo.watchers > 0));
  }

}
