export const selectAllBeers = state => {
  return Object.keys(state.beers).map(beerId => state.beers[beerId]);
};
