// Define the possible action types
import {Action} from '@ngrx/store';
import {StackoverflowInfo} from '../../stackoverflow-info';

export enum StackoverflowActionTypes {
  LoadStackoverflowUser = '[Stackoverflow](User) Load Data',
  StackoverflowUserLoaded = '[Stackoverflow](User) Data Loaded',
  LoadStackoverflowTopTags = '[Stackoverflow](Top Tags) Load Data',
  StackoverflowTopTagsLoaded = '[Stackoverflow](Top Tags) Data Loaded'
}

// Create the actions
export class LoadStackoverflowUser implements Action {
  readonly type = StackoverflowActionTypes.LoadStackoverflowUser;
}

export class StackoverflowUserLoaded implements  Action {
  readonly type = StackoverflowActionTypes.StackoverflowUserLoaded;
  constructor(private payload: StackoverflowInfo) {}
}

export class LoadStackoverflowTopTags implements Action {
  readonly type = StackoverflowActionTypes.LoadStackoverflowTopTags;
}

export class StackoverflowTopTagsLoaded implements Action {
  readonly type = StackoverflowActionTypes.StackoverflowTopTagsLoaded;
  constructor(private payload: StackoverflowInfo) {}
}

// Expose Stackoverflow actions as union type
export type StackoverflowActions = LoadStackoverflowUser
  | StackoverflowUserLoaded
  | LoadStackoverflowTopTags
  | StackoverflowTopTagsLoaded;
