import * as fromStackoverflow from './stackoverflow/stackoverflow.reducer';
import {ActionReducerMap} from '@ngrx/store';


// Define interface
export interface AppState {
  stackoverflow: fromStackoverflow.StackoverflowState;
}

export const reducers: ActionReducerMap<AppState> = {
  stackoverflow: fromStackoverflow.stackoverflowReducer
};

const state: AppState = {
  stackoverflow: fromStackoverflow.initialState
}
