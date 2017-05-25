import {CREATE_LIKE, DELETE_LIKE} from '../actions/like_actions';
import merge from 'lodash/merge';

const initialState = {
  likes: {}
};

const LikesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case CREATE_LIKE:
      newState = merge({}, state);
      newState.likes = action.like;
      return newState;

    case DELETE_LIKE:
      newState = merge({}, state);
      delete newState.likes[action.like.id];
      return newState;

    default:
      return state;
  }
};

export default LikesReducer;
