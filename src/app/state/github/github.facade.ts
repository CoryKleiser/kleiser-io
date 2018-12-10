import {Injectable} from '@angular/core';
import {GithubUser} from '../../github-user';
import {Observable} from 'rxjs/Observable';
import {GithubRepo} from '../../github-repo';
import {GithubState} from './github.reducer';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {LoadGithubUser, LoadGithubUserRepos} from './github.actions';

@Injectable({providedIn: 'root'})
export class GithubFacade {
  userInfo$: Observable<GithubUser>;
  userRepos$: Observable<GithubRepo[]>;

  constructor(private store: Store<GithubState>) {
    this.userInfo$ = store.pipe(
      select('github'),
      map((state: GithubState) => state.userInfo)
    );
    this.userRepos$ = store.pipe(
      select('github'),
      map((state: GithubState) => state.userRepos)
    );
  }

  getGithubUserInfo(username: string) {
    this.store.dispatch(new LoadGithubUser(username));
  }

  getGithubUserRepos(username: string) {
    this.store.dispatch(new LoadGithubUserRepos(username));
  }
}
