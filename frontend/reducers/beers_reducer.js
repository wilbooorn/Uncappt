import { RECEIVE_ALL_BEER, RECEIVE_ONE_BEER,
CREATE_NEW_BEER, RECEIVE_BEER_ERRORS } from '../actions/beer_actions';
import merge from 'lodash/merge';

const defaultState = {
  beers: {},
  errors: []
};

const BeersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){

    case RECEIVE_ALL_BEER:
      newState = merge({}, state);
      newState.beers = action.beers;
      return newState;

    case RECEIVE_ONE_BEER:
      newState = merge({}, state);
      newState.beers = action.beer;
      return newState;

    case CREATE_NEW_BEER:
      newState = merge({}, state);
      newState.beers[action.beer.id] = action.beer;
      newState.errors = [];
      return newState;

    case RECEIVE_BEER_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      console.log(action.errors);
      return newState;

    default:
      return state;
  }
};

export default BeersReducer;
