import * as fromStackoverflow from './stackoverflow/stackoverflow.reducer';
import * as fromGithub from './github/github.reducer';
import {ActionReducerMap} from '@ngrx/store';


// Define interface
export interface AppState {
  stackoverflow: fromStackoverflow.StackoverflowState;
  github: fromGithub.GithubState;
}

export const reducers: ActionReducerMap<AppState> = {
  stackoverflow: fromStackoverflow.stackoverflowReducer,
  github: fromGithub.githubReducer
};

const state: AppState = {
  stackoverflow: fromStackoverflow.initialState,
  github: fromGithub.initialState
};
