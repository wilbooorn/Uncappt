import merge from "lodash/merge";
import {RECEIVE_ALL_CHECKINS, RECEIVE_ONE_CHECKIN} from '../actions/checkin_actions';

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
      
    default:
      return state;
  }
};

export default CheckinsReducer;
