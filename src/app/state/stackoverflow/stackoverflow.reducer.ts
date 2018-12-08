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
  topTags:  {'items': [{'user_id': 6713829, 'answer_count': 56, 'answer_score': 62, 'question_count': 0, 'question_score': 0, 'tag_name': 'javascript'}, {'user_id': 6713829, 'answer_count': 26, 'answer_score': 17, 'question_count': 0, 'question_score': 0, 'tag_name': 'html'}, {'user_id': 6713829, 'answer_count': 16, 'answer_score': 12, 'question_count': 0, 'question_score': 0, 'tag_name': 'css'}, {'user_id': 6713829, 'answer_count': 12, 'answer_score': 10, 'question_count': 0, 'question_score': 0, 'tag_name': 'jquery'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 4, 'question_score': 7, 'tag_name': 'perl'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 3, 'question_score': 6, 'tag_name': 'sftp'}, {'user_id': 6713829, 'answer_count': 7, 'answer_score': 4, 'question_count': 0, 'question_score': 0, 'tag_name': 'arrays'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 4, 'question_count': 0, 'question_score': 0, 'tag_name': 'anonymous-function'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 4, 'question_count': 0, 'question_score': 0, 'tag_name': 'angularjs'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 4, 'question_count': 0, 'question_score': 0, 'tag_name': 'ionic-framework'}, {'user_id': 6713829, 'answer_count': 2, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'performance'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'webpage'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'profiling'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 1, 'question_score': 3, 'tag_name': 'winscp'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'ternary'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'google-chrome-devtools'}, {'user_id': 6713829, 'answer_count': 3, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'twitter-bootstrap'}, {'user_id': 6713829, 'answer_count': 3, 'answer_score': 3, 'question_count': 0, 'question_score': 0, 'tag_name': 'ecmascript-6'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 1, 'question_score': 3, 'tag_name': 'winscp-net'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 2, 'question_count': 0, 'question_score': 0, 'tag_name': 'ajax'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 1, 'question_score': 2, 'tag_name': 'put'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 2, 'question_count': 0, 'question_score': 0, 'tag_name': 'button'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 2, 'question_count': 0, 'question_score': 0, 'tag_name': 'background-color'}, {'user_id': 6713829, 'answer_count': 2, 'answer_score': 2, 'question_count': 0, 'question_score': 0, 'tag_name': 'node.js'}, {'user_id': 6713829, 'answer_count': 2, 'answer_score': 2, 'question_count': 0, 'question_score': 0, 'tag_name': 'ecmascript-5'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 1, 'question_score': 1, 'tag_name': 'windows'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 1, 'question_count': 0, 'question_score': 0, 'tag_name': 'sorting'}, {'user_id': 6713829, 'answer_count': 1, 'answer_score': 1, 'question_count': 0, 'question_score': 0, 'tag_name': 'mapping'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 1, 'question_score': 1, 'tag_name': 'ftp'}, {'user_id': 6713829, 'answer_count': 0, 'answer_score': 0, 'question_count': 1, 'question_score': 1, 'tag_name': 'ssh'}], 'has_more': true, 'quota_max': 300, 'quota_remaining': 294},
};

// build the most simplest reducer
export function stackoverflowReducer(
  state = initialState, action): StackoverflowState {
    switch (action.type) {
      case StackoverflowActionTypes.StackoverflowUserLoaded: {
        console.log(Object.assign({}, state, { userData: action.payload }));
        return Object.assign({}, state, { userData: action.payload });
      }
      default:
        return state;
    }
  }
