import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StackoverflowService} from '../../stackoverflow.service';
import {
  LoadStackoverflowTopTags,
  LoadStackoverflowUser,
  StackoverflowActionTypes,
  StackoverflowTopTagsLoaded,
  StackoverflowUserLoaded
} from './stackoverflow.actions';
import {StackoverflowInfo} from '../../stackoverflow-info';
import {map, switchMap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class StackoverflowEffects {
  @Effect() loadStackoverflowUser$ = this.actions$.pipe(
    ofType(StackoverflowActionTypes.LoadStackoverflowUser),
    switchMap((action: LoadStackoverflowUser) =>
      this.stackoverflowService.getUserInfo()
        .pipe(
          map((res: StackoverflowInfo) => new StackoverflowUserLoaded(res))
        )
    )
  );
  @Effect() loadStackoverflowTopTags$ = this.actions$.pipe(
    ofType(StackoverflowActionTypes.LoadStackoverflowTopTags),
    switchMap((action: LoadStackoverflowTopTags) =>
      this.stackoverflowService.getTopTags()
        .pipe(
          map((res: StackoverflowInfo) => new StackoverflowTopTagsLoaded(res))
        )
    )
  )
  constructor(
    private actions$: Actions,
    private stackoverflowService: StackoverflowService
  ) {}

}
