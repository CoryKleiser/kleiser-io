import {StackoverflowInfo} from '../../stackoverflow-info';
import {StackoverflowActionTypes} from './stackoverflow.actions';


// Define an interface
export interface StackoverflowState {
  userData: StackoverflowInfo;
  topTags: StackoverflowInfo;
}

// Define initial state
export const initialState: StackoverflowState = {
  userData: {} as StackoverflowInfo,
  topTags:  {} as StackoverflowInfo
};

// build the most simplest and pure reducers
export function stackoverflowReducer(
  state = initialState, action): StackoverflowState {
    switch (action.type) {
      case StackoverflowActionTypes.StackoverflowUserLoaded:
        return Object.assign({}, state, { userData: action.payload });
      case StackoverflowActionTypes.StackoverflowTopTagsLoaded:
        return Object.assign({}, state, {topTags: action.payload});
      default:
        return state;
    }
  }
