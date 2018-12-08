import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StackoverflowInfo} from '../../stackoverflow-info';
import {select, Store} from '@ngrx/store';
import {StackoverflowState} from './stackoverflow.reducer';
import {LoadStackoverflowTopTags, LoadStackoverflowUser} from './stackoverflow.actions';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StackoverflowFacade {
  userData$: Observable<StackoverflowInfo>;
  topTags$: Observable<StackoverflowInfo>;

  constructor(private store: Store<StackoverflowState>) {
    this.userData$ = store.pipe(
      select('stackoverflow'),
      map((state: StackoverflowState) => state.userData)
    );
    this.topTags$ = store.pipe(
      select('stackoverflow'),
      map((state: StackoverflowState) => state.topTags)
    );
  }

  getStackoverflowUserInfo() {
    this.store.dispatch(new LoadStackoverflowUser());
  }

  getStackoverflowTopTags() {
    this.store.dispatch(new LoadStackoverflowTopTags());
  }

}
