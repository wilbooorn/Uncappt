import merge from "lodash/merge";
import {RECEIVE_ALL_CHECKINS, RECEIVE_ONE_CHECKIN,
CREATE_CHECKIN, DELETE_CHECKIN, UPDATE_CHECKIN
} from '../actions/checkin_actions';

const defaultState = {
  checkins: {},
  errrors: []
};

const CheckinsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  
  switch(action.type){
    case RECEIVE_ALL_CHECKINS:
      newState = merge({}, state);
      newState.checkins = action.checkins;
      return newState;

    case RECEIVE_ONE_CHECKIN:
      newState = merge({}, state);
      newState.checkins = action.checkin;
      return newState;

    case CREATE_CHECKIN:
      newState = merge({}, state);
      newState.checkins[action.checkin.id] = action.checkin;
      newState.errors = [];
      return newState;

    case DELETE_CHECKIN:
      newState = merge({}, state);
      delete newState.checkins[action.checkin.id];
      return newState;

    case UPDATE_CHECKIN:
      newState = merge({}, state);
      newState.checkins[action.checkin.id] = action.checkin;
      newState.errors = [];
      return newState;

    default:
      return state;
  }
};

export default CheckinsReducer;
