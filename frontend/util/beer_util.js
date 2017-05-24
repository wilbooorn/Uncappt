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

export const deleteBeer = (beerId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/beers/${beerId}`
  })
);

export const updateBeer = beer => (
  $.ajax({
    method: "PATCH",
    url: `/api/beers/${beer.id}`,
    data: {beer}
  })
);

export const searchBeer = search => (
  $.ajax({
    method: "GET",
    url: `/api/beers/?search=${search}`
  })
);
