export const fetchAllCheckins = () => (
  $.ajax({
    method: "GET",
    url: "api/checkins"
  })
);

export const fetchOneCheckin = (checkinId) => (
  $.ajax({
    method: "GET",
    url: `/checkins/${checkinId}`
  })
);
