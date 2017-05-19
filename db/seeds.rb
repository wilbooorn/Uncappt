# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Beer.destroy_all
User.destroy_all
Checkin.destroy_all

user1 = User.create(username: "Guest", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png");
user2 = User.create(username: "Ted", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495146369/ted_zmpiyd.jpg");
user3 = User.create(username: "Marshall", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495146373/marshall_k992zf.jpg");
user4 = User.create(username: "Robin", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495146561/robin_zbkyh7.jpg");


beer1 = Beer.create(name: "Ruination", description: "Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. Dry hopping and hop bursting squeeze every last drop of piney, citrusy, tropical essence from the hops",
                    brewery: "Stone Brewing Company", abv: 8.5, ibu: 100, style: "Double IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495041225/rui_bottle_cvhbiz.png")

beer2 = Beer.create(name: "Watermelon Dorado", description: "Mash, kettle, and dry hopping blend to create a huge hop profile that is balanced with a blast of watermelon.",
                    brewery: "Ballast Point", abv: 6.1, ibu: 65, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495037478/watermlon_dorago_ywek0y.png")


beer3 = Beer.create(name: "Angel City IPA", description: "It’s big. It’s bold. It’s got lots of character. A medium-bodied, copper-hued beer brewed with enough hops to satisfy. It’s the perfect treat for the hop inclined.",
                    brewery: "Angel City Brewery", abv: 10, ibu: 90, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495146803/ACB-IPA-12oz-Bottle-380x1024_qo4sh1.jpg")


checkin1 = Checkin.create(user_id: user2.id, beer_id: beer1.id, rating: 4,
                          review: "Actually it's pronounced watermel-OH-n", location: "MacLaren's Pub",
                          image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495147130/ted_beer_cszqj1.jpg")

checkin2 = Checkin.create(user_id: user3.id, beer_id: beer2.id, rating: 5,
                          review: "This beer is delicious. But I wish my wife was here...", location: "St. Cloud, Minnesota",
                          image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495146941/marshall_beer_txnuxq.jpg")

checkin3 = Checkin.create(user_id: user4.id, beer_id: beer3.id, rating: 5,
                          review: "They don't make beer this good in Canada", location: "Hoser Hut",
                          image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495147054/robin_beer_dxgsg0.jpg")
