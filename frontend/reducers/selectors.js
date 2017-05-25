export const selectAllBeers = state => {
  return Object.keys(state.beerInfo.beers)
  .map(beerId => state.beerInfo.beers[beerId])
  .sort((a, b) => {
    if (a.name < b.name){
      return -1;
    }else if (a.name > b.name){
      return 1;
    }else{
      return 0;
    }
  });
};

export const selectAllCheckins = state => {
  return Object.keys(state.checkinInfo.checkins).map(checkinId => state.checkinInfo.checkins[checkinId]);
};


export const selectBeerCheckins = (checkins, beerId) => {
    checkins.filter(checkin => checkin.beerId === beerId);
};
