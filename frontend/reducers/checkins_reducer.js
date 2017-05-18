import merge from "lodash/merge";
import {RECEIVE_ALL_CHECKINS} from '../actions/checkin_actions';

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

    default:
      return state;
  }
};

export default CheckinsReducer;
