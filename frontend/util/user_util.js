export const fetchOneUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user: {image_url: user.image_url}}
  })
);
