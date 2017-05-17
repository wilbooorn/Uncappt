export const fetchAllBeers = () => (
  $.ajax({
    method: "GET",
    url: "api/beers"
  })
);

export const fetchOneBeer = (beerId) => (
  $.ajax({
    method: "GET",
    url: `/api/beers/${beerId}`
  })
);
