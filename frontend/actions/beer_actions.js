export const RECEIVE_ALL_BEER = "RECEIVE_ALL_BEER";
export const RECEIVE_ONE_BEER = "RECEIVE_ONE_BEER";
export const CREATE_NEW_BEER = "CREATE_NEW_BEER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
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

export const createOneBeer = beer => ({
  type: CREATE_NEW_BEER,
  beer
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestAllBeer = () => dispatch => {
  return APIUtil.fetchAllBeers()
    .then(beer => dispatch(receiveAllBeer(beer)));
};

export const requestOneBeer = (beerId) => dispatch => {
  return APIUtil.fetchOneBeer(beerId)
    .then(beer => dispatch(receiveOneBeer(beer)),
    error => dispatch(receiveOneBeer({})));
};

export const createNewBeer = beer => dispatch => {
  return APIUtil.sendOneBeer(beer)
  .then(newBeer => dispatch(createOneBeer(newBeer)),
  errors => dispatch(receiveErrors(errors.parseJSON)));
};
