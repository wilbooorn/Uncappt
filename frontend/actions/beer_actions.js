export const RECEIVE_ALL_BEER = "RECEIVE_ALL_BEER";
export const RECEIVE_ONE_BEER = "RECEIVE_ONE_BEER";
import * as APIUtil from '../util/beer_util';

export const receiveAllBeer = (beers) => {
  return {
  type: RECEIVE_ALL_BEER,
  beers
};};

export const receiveOneBeer = (beer) => ({
  type: RECEIVE_ONE_BEER,
  beer
});

export const requestAllBeer = () => dispatch => {
  return APIUtil.fetchAllBeers()
    .then(beer => dispatch(receiveAllBeer(beer)));
};

export const requestOneBeer = (beerId) => dispatch => {
  return APIUtil.fetchOneBeer(beerId)
    .then(beer => dispatch(receiveOneBeer(beer)));
};
