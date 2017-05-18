export const selectAllBeers = state => {
  return Object.keys(state.beerInfo.beers).map(beerId => state.beerInfo.beers[beerId]);
};
