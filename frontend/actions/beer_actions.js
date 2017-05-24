export const RECEIVE_ALL_BEER = "RECEIVE_ALL_BEER";
export const RECEIVE_ONE_BEER = "RECEIVE_ONE_BEER";
export const CREATE_NEW_BEER = "CREATE_NEW_BEER";
export const RECEIVE_BEER_ERRORS = "RECEIVE_BEER_ERRORS";
export const REMOVE_BEER = "REMOVE_BEER";
export const UPDATE_BEER = "UPDATE_BEER";

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

export const removeOneBeer = beer => ({
  type: REMOVE_BEER,
  beer
});

export const receiveBeerErrors = errors => ({
  type: RECEIVE_BEER_ERRORS,
  errors
});

export const updateOneBeer = beer => ({
  type: UPDATE_BEER,
  beer
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
    error => dispatch(receiveBeerErrors(error.responseJSON)));
};

export const deleteBeer = beerId => dispatch => {
  return APIUtil.deleteBeer(beerId)
    .then(beer => dispatch(removeOneBeer(beer)),
    error =>  dispatch(receiveBeerErrors(error.responseJSON)));
};

export const updateBeer = (beer) => dispatch => {
  return APIUtil.updateBeer(beer)
    .then(newBeer => {
      return dispatch(updateOneBeer(newBeer));
    },
    error => dispatch(receiveBeerErrors(error.responseJSON)));
};

export const searchBeer = search => dispatch => {
  return APIUtil.searchBeer(search)
    .then(beer => dispatch(receiveAllBeer(beer)));
};
