import {CREATE_LIKE, DELETE_LIKE} from '../actions/like_actions';
import merge from 'lodash/merge';

const LikesReducer = (state, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case CREATE_LIKE:
      return action.like;

    case DELETE_LIKE:
      newState = merge({}, state);
      delete newState.likes[action.like.id];
      return newState;

    default:
      return state;
  }
};

export default LikesReducer;
