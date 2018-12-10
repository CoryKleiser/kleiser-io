import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {GithubService} from '../../github.service';
import {GithubActionTypes, GithubUserLoaded, GithubUserReposLoaded, LoadGithubUser, LoadGithubUserRepos} from './github.actions';
import {map, switchMap} from 'rxjs/operators';
import {GithubUser} from '../../github-user';
import {GithubRepo} from '../../github-repo';

@Injectable({providedIn: 'root'})
export class GithubEffects {
  @Effect() loadGithubUser$ = this.actions$.pipe(
    ofType(GithubActionTypes.LoadGithubUser),
    switchMap((action: LoadGithubUser) =>
      this.githubService.getUserProfile(action.payload)
        .pipe(
          map((res: GithubUser) => new GithubUserLoaded(res))
        )
    )
  );
  @Effect() loadGithubUserRepos$ = this.actions$.pipe(
    ofType(GithubActionTypes.LoadGithubUserRepos),
    switchMap((action: LoadGithubUserRepos) =>
      this.githubService.getUserRepos(action.payload)
        .pipe(
          map((res: GithubRepo[]) => new GithubUserReposLoaded(res))
        )
    )
  );
  constructor(
    private actions$: Actions,
    private githubService: GithubService
  ) {}
}
