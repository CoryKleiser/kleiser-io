import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StackoverflowService} from '../../stackoverflow.service';
import {LoadStackoverflowUser, StackoverflowActionTypes, StackoverflowUserLoaded} from './stackoverflow.actions';
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
  constructor(
    private actions$: Actions,
    private stackoverflowService: StackoverflowService
  ) {}

}
