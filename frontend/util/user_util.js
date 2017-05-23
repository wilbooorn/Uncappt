export const fetchOneUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
);
