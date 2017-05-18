export const fetchAllCheckins = () => (
  $.ajax({
    method: "GET",
    url: "api/checkins"
  })
);
