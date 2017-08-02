json.id @user.id
json.username @user.username
json.location @user.location
json.image_url @user.image_url
json.likes @user.likes
json.checkin_likes @user.checkin_likes
json.checkins(@user.checkins) do |checkin|
  json.id checkin.id
  json.user_id checkin.user_id
  json.beer_id checkin.beer_id
  json.review checkin.review
  json.rating checkin.rating
  json.location checkin.location
  json.image_url checkin.image_url
  json.user checkin.user
  json.beer checkin.beer
  json.likes checkin.likes
  json.user_likes checkin.user_likes
  json.created_at checkin.created_at
 end
