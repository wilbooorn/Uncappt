import { RECEIVE_ALL_BEER } from '../actions/beer_actions';
import merge from 'lodash/merge';

const BeersReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_ALL_BEER:
      return action.beers;

    default:
      return state;
  }
};

export default BeersReducer;
