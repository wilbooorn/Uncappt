export const selectAllBeers = state => {
  console.log(state);
  return Object.keys(state.beerInfo.beers).map(beerId => state.beerInfo.beers[beerId]);
};
