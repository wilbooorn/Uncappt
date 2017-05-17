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

export const sendOneBeer = (beer) => (
  $.ajax({
    method: "POST",
    url: "/api/beers",
    data: {beer}
  })
);
