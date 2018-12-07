import * as fromStackoverflow from './stackoverflow/stackoverflow.reducer';


// Define interface
export interface RootState {
  stackoverflow: fromStackoverflow.StackoverflowState;
}

export const reducers = {
  stackoverflow: fromStackoverflow.stackoverflowReducer
};

const state: RootState = {
  stackoverflow: fromStackoverflow.initialState
}
