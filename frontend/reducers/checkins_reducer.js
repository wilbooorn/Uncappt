import merge from "lodash/merge";
import {RECEIVE_ALL_CHECKINS, RECEIVE_ONE_CHECKIN, DELETE_CHECKIN,
  RECEIVE_CHECKIN_ERRORS} from '../actions/checkin_actions';

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

    case DELETE_CHECKIN:
      newState = merge({}, state);
      delete newState.checkins[action.checkin.id];
      return newState;

    case RECEIVE_CHECKIN_ERRORS:
      console.log("An error");
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    default:
      return state;
  }
};

export default CheckinsReducer;
