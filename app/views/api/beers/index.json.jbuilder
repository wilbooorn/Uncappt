@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :id, :name, :description, :brewery, :abv, :ibu,
                        :image_url, :style, :checkins
  end
end
