# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Beer.destroy_all
User.destroy_all
Checkin.destroy_all

user1 = User.create(username: "Guest", password: "password", image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png");
user2 = User.create(username: "Ted", password: "password", image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146369/ted_zmpiyd.jpg");
user3 = User.create(username: "Marshall", password: "password", image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146373/marshall_k992zf.jpg");
user4 = User.create(username: "Robin", password: "password", image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146561/robin_zbkyh7.jpg");
user5 = User.create(username: "Barney", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495488759/barney_omjchc.jpg");
user6 = User.create(username: "Lily", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495488862/lily_xjutgb.jpg");
user6 = User.create(username: "Blitz", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495489037/blitz_wngim3.png");



beer1 = Beer.create(name: "Ruination", description: "Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. Dry hopping and hop bursting squeeze every last drop of piney, citrusy, tropical essence from the hops",
                    brewery: "Stone Brewing Company", abv: 8.5, ibu: 100, style: "Double IPA",
                    image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495041225/rui_bottle_cvhbiz.png")

beer2 = Beer.create(name: "Watermelon Dorado", description: "Mash, kettle, and dry hopping blend to create a huge hop profile that is balanced with a blast of watermelon.",
                    brewery: "Ballast Point", abv: 6.1, ibu: 65, style: "IPA",
                    image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495037478/watermlon_dorago_ywek0y.png")

beer3 = Beer.create(name: "Angel City IPA", description: "It’s big. It’s bold. It’s got lots of character. A medium-bodied, copper-hued beer brewed with enough hops to satisfy. It’s the perfect treat for the hop inclined.",
                    brewery: "Angel City Brewery", abv: 10, ibu: 90, style: "IPA",
                    image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146803/ACB-IPA-12oz-Bottle-380x1024_qo4sh1.jpg")

beer4 = Beer.create(name: "Racer 5", description: "This hoppy IPA is a full bodied beer brewed with malted barley, wheat, and crystal malts. The malt base is designed to highlight the unique floral qualities Columbus and Cascade hops from the Pacific Northwest.",
                    brewery: "Bear Republic", abv: 7.5, ibu: 75, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495489360/racer5_dvczb3.jpg")

beer5 = Beer.create(name: "Corona Extra", description: "With a refreshing, smooth taste balanced between heavier European imports and lighter domestic beer, Corona is an even-keeled cerveza with fruity-honey aromas and a touch of malt. The flavor is crisp, clean and well balanced between hops and malt.",
                    brewery: "Cervecería Modelo", abv: 4.6, ibu: 25, style: "Lager",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495489588/Corona_oskoea.jpg")

beer6 = Beer.create(name: "PILS", description: "Brewed with loads of imported Saaz hops and a bottom-fermenting yeast strain that leaves it Light and Crisp and Easy to Slam, yet full of real flavor and all the things you yearn for.",
                    brewery: "Lagunitas", abv: 10, ibu: 90, style: "Pilsner",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495490063/PILS_foh9aq.png")

beer7 = Beer.create(name: "Hop Stoopid", description: "The beer with a guarantee built right into the name, this one is destined to blast through the flavors from the night before. Massively dry-hopped for your aromatic pleasure.",
                    brewery: "Lagunitas", abv: 8, ibu: 102, style: "Imperial IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495490246/Hop-Stoopid-12oz_tzbulq.png")

beer8 = Beer.create(name: "Black Marlin", description: "Crafted it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                    brewery: "Ballast Point", abv: 6, ibu: 46, style: "Porter",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495490494/black_marlin_wiucam.png")

beer9 = Beer.create(name: "Guinness", description: "Rich and creamy. Distinctively black. Velvety in its finish. This iconic beer is defined by harmony. Sip after sip, sweet counters bitter as the malt arrives on cue to compliment a base of roasted barley.",
                    brewery: "St. James' Gate Brewery", abv: 4.2, ibu: 40, style: "Stout",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495490799/guiness_esjgva.jpg")

beer10 = Beer.create(name: "Angel City IPA", description: "It’s big. It’s bold. It’s got lots of character. A medium-bodied, copper-hued beer brewed with enough hops to satisfy. It’s the perfect treat for the hop inclined.",
                    brewery: "Angel City Brewery", abv: 10, ibu: 90, style: "IPA",
                    image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146803/ACB-IPA-12oz-Bottle-380x1024_qo4sh1.jpg")

beer11 = Beer.create(name: "Angel City IPA", description: "It’s big. It’s bold. It’s got lots of character. A medium-bodied, copper-hued beer brewed with enough hops to satisfy. It’s the perfect treat for the hop inclined.",
                    brewery: "Angel City Brewery", abv: 10, ibu: 90, style: "IPA",
                    image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146803/ACB-IPA-12oz-Bottle-380x1024_qo4sh1.jpg")

beer12 = Beer.create(name: "Angel City IPA", description: "It’s big. It’s bold. It’s got lots of character. A medium-bodied, copper-hued beer brewed with enough hops to satisfy. It’s the perfect treat for the hop inclined.",
                    brewery: "Angel City Brewery", abv: 10, ibu: 90, style: "IPA",
                    image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146803/ACB-IPA-12oz-Bottle-380x1024_qo4sh1.jpg")



checkin1 = Checkin.create(user_id: user2.id, beer_id: beer1.id, rating: 4,
                          review: "Actually it's pronounced watermel-OH-n", location: "MacLaren's Pub",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147130/ted_beer_cszqj1.jpg")

checkin2 = Checkin.create(user_id: user3.id, beer_id: beer2.id, rating: 5,
                          review: "This beer is delicious. But I wish my wife was here...", location: "St. Cloud, Minnesota",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146941/marshall_beer_txnuxq.jpg")

checkin3 = Checkin.create(user_id: user4.id, beer_id: beer3.id, rating: 5,
                          review: "They don't make beer this good in Canada", location: "Hoser Hut",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147054/robin_beer_dxgsg0.jpg")

checkin4 = Checkin.create(user_id: user4.id, beer_id: beer1.id, rating: 3,
                          review: "Patrice really likes this beer. But nobody asked her!", location: "Hoser Hut",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147054/robin_beer_dxgsg0.jpg")
