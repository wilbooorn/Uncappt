export const fetchAllCheckins = () => (
  $.ajax({
    method: "GET",
    url: "api/checkins"
  })
);

export const fetchOneCheckin = (checkinId) =>(
  $.ajax({
    method: "GET",
    url: `/api/checkins/${checkinId}`
  })
);

export const createNewCheckin = checkin => (
  $.ajax({
    method: "POST",
    url: 'api/checkins',
    data: {checkin}
  })
);

export const deleteCheckin = checkinId => (
  $.ajax({
    method: "DELETE",
    url: `/api/checkins/${checkinId}`
  })
);
