import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {UPDATE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const SessionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      newState.currentUser = null;
      return newState;

    case UPDATE_USER:
      newState = merge({}, state);
      newState.currentUser = action.user;
      return newState;

    default:
      return state;
  }
};

export default SessionsReducer;
