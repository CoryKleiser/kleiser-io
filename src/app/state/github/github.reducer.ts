import {GithubUser} from '../../github-user';
import {GithubRepo} from '../../github-repo';
import {GithubActionTypes} from './github.actions';


export interface GithubState {
  userInfo: GithubUser;
  userRepos: GithubRepo[];
}

export const initialState: GithubState = {
  userInfo: {} as GithubUser,
  userRepos: []
}

export function githubReducer(
  state = initialState, action): GithubState {
    switch (action.type) {
      case GithubActionTypes.GithubUserLoaded :
        return Object.assign({}, state, {userInfo: action.payload});
      case GithubActionTypes.GithubUserReposLoaded :
        return Object.assign({}, state, {userRepos: action.payload});
      default :
        return state;
    }
  }
