

// 01 define possible action types
import {Action} from '@ngrx/store';
import {GithubUser} from '../../github-user';
import {GithubRepo} from '../../github-repo';

export enum GithubActionTypes {
  LoadGithubUser = '[Github](user) Load Data',
  GithubUserLoaded = '[Github](user) Data Loaded',
  LoadGithubUserRepos = '[Github](repos) Load Data',
  GithubUserReposLoaded = '[Github](repos) Data Loaded'
}


// 02 Create actions
export class LoadGithubUser implements Action {
  readonly type = GithubActionTypes.LoadGithubUser;
}

export class GithubUserLoaded implements Action {
  readonly type = GithubActionTypes.GithubUserLoaded;
  constructor(private payload: GithubUser) {}
}

export class LoadGithubUserRepos implements Action {
  readonly type = GithubActionTypes.LoadGithubUserRepos;
}

export class GithubUserReposLoaded {
  readonly type = GithubActionTypes.GithubUserReposLoaded;
  constructor(private payload: GithubRepo[]) {}
}

// 03 Expose Actions as union type
export type GithubActions = LoadGithubUser
  | GithubUserLoaded
  | LoadGithubUserRepos
  | GithubUserReposLoaded;
