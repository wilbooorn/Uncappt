import merge from 'lodash/merge';
import {RECEIVE_USER, UPDATE_USER} from '../actions/user_actions';

const defaultState = {
  user: {},
  errors: []
};

const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_USER:
      newState = merge({}, state);
      newState.user = action.user;
      return newState;

    case UPDATE_USER:
      newState = merge({}, state);
      newState.user = action.user;
      return newState;

    default:
      return state;
  }

};

export default UsersReducer;
