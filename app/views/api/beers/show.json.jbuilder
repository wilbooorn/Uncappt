json.id @beer.id
json.name @beer.name
json.description @beer.description
json.brewery @beer.brewery
json.abv @beer.abv
json.ibu @beer.ibu
json.style @beer.style
json.image_url @beer.image_url
json.rating @beer.rating
json.checkins(@beer.checkins) do |checkin|
  json.id checkin.id
  json.user_id checkin.user_id
  json.beer_id checkin.beer_id
  json.review checkin.review
  json.rating checkin.rating
  json.location checkin.location
  json.image_url checkin.image_url
  json.user checkin.user
  json.beer checkin.beer
 end
