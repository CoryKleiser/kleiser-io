import {GithubUser} from '../../github-user';
import {GithubRepo} from '../../github-repo';


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
      default :
        return state;
    }
  }
