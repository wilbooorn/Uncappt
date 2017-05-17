export const fetchAllBeers = () => (
  $.ajax({
    method: "GET",
    url: "api/beers"
  })
);
