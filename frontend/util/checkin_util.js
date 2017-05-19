export const fetchAllCheckins = () => (
  $.ajax({
    method: "GET",
    url: "api/checkins"
  })
);

export const fetchOneCheckin = (checkinId) => (
  $.ajax({
    method: "GET",
    url: `api/checkins/${checkinId}`
  })
);


export const deleteCheckin = (checkinId) => (
  $.ajax({
    method: "DELETE",
    url: `api/checkins/${checkinId}`
  })
);
