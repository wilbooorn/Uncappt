import { RECEIVE_ALL_BEER, RECEIVE_ONE_BEER,
CREATE_NEW_BEER, RECEIVE_ERRORS } from '../actions/beer_actions';
import merge from 'lodash/merge';

const BeersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){

    case RECEIVE_ALL_BEER:
      return action.beers;

    case RECEIVE_ONE_BEER:
      return action.beer;

    case CREATE_NEW_BEER:
      newState = merge({}, state);
      newState.beers[action.beer.id] = action.beer;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    default:
      return state;
  }
};

export default BeersReducer;
