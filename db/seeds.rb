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
user7 = User.create(username: "Blitz", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495489037/blitz_wngim3.png");



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

beer10 = Beer.create(name: "Aurora Hoppyalis", description: "San Diego-style IPA brewed with Simcoe, Mosaic, Amarillo, and Citra hops. Robust flavors and aromas of tropical fruit, pine, and tangerine linger through a dry, crisp finish. Tonight’s forecast: clear hoppy skies.",
                    brewery: "Karl Strauss Brewing Company", abv: 7, ibu: 60, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495492891/hoppy_eh3nob.jpg")

beer11 = Beer.create(name: "120 Minute IPA", description: "120 Minute IPA is continuously hopped with a copious amount of high-alpha American hops throughout the boil and whirlpool, and then dry-hopped with another pallet of hops. Unfiltered and abundently hoppy, it's the Holy Grail for hopheads!",
                    brewery: "Dogfish Head", abv: 15, ibu: 120, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495493012/120_w9vsi6.jpg")

beer12 = Beer.create(name: "Pliny the Elder", description: "Pliny the Elder is brewed with Amarillo, Centennial, CTZ, and Simcoe hops. It is well-balanced with malt, hops, and alcohol, slightly bitter with a fresh hop aroma of floral, citrus, and pine. Best enjoyed FRESH, which is why it is made in such limited supply.",
                    brewery: "Russian River Brewing Company", abv: 8, ibu: 95, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495493268/pliny_wjdmgl.jpg")



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

checkin5 = Checkin.create(user_id: user1.id, beer_id: beer4.id, rating: 4,
                          review: "I'm just a guest, and therefore have nothing significant to say.", location: "White Castle")

checkin6 = Checkin.create(user_id: user1.id, beer_id: beer9.id, rating: 3,
                          review: "Beauty is in the eye of the beer holder", location: "Paris")

checkin7 = Checkin.create(user_id: user5.id, beer_id: beer7.id, rating: 5,
                          review: "This beer is legen... wait for it... and I hope you're not loactose intolerant because the second half of that word is DAIRY", location: "Robots vs. Wrestlers",
                          image_url:"http://res.cloudinary.com/dslok1mwv/image/upload/v1495497117/barney-beer_zondws.jpg")

checkin8 = Checkin.create(user_id: user6.id, beer_id: beer10.id, rating: 5,
                          review: "Marshall bought me this. Happy wife, happy life.", location: "Art School",
                          image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495497293/lilmarsh_ekhd6j.jpg")

checkin9 = Checkin.create(user_id: user4.id, beer_id: beer11.id, rating: 4,
                          review: "Celebrating becoming the newest currency rotation specialist.", location: "The Mall",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147054/robin_beer_dxgsg0.jpg")

checkin10 = Checkin.create(user_id: user5.id, beer_id: beer8.id, rating: 3,
                          review: "This beer makes me want to SUIT UP! Oh wait, I'm always suited up.", location: "Laser Tag",
                          image_url:"http://res.cloudinary.com/dslok1mwv/image/upload/v1495497117/barney-beer_zondws.jpg")

checkin11 = Checkin.create(user_id: user1.id, beer_id: beer6.id, rating: 5,
                          review: "Beer is not the answer. Beer is the question, yes is the answer.", location: "Home")

checkin12 = Checkin.create(user_id: user2.id, beer_id: beer4.id, rating: 4,
                          review: "Architects don't typically drink beers on Monday, but I'll make an  exception just this once.", location: "The Vatican",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147130/ted_beer_cszqj1.jpg")

checkin13 = Checkin.create(user_id: user2.id, beer_id: beer12.id, rating: 3,
                          review: "This is the beer I had after I got left at the alter. I think I'm in love with it.", location: "The alter",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147130/ted_beer_cszqj1.jpg")

checkin14 = Checkin.create(user_id: user5.id, beer_id: beer2.id, rating: 3,
                          review: "When I'm sad, I stop being sad and be awesome instead. Then I get one of these beers.", location: "Magic Palace",
                          image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495497117/barney-beer_zondws.jpg")

checkin15 = Checkin.create(user_id: user4.id, beer_id: beer10.id, rating: 3,
                          review: "\I love a Scotch that's old enough to order its own Scotch. But this beer will do for now", location: "Metro News 1",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495147054/robin_beer_dxgsg0.jpg")

checkin16 = Checkin.create(user_id: user3.id, beer_id: beer6.id, rating: 5,
                          review: "I would walk 500 miles and I would walk 500 more. Just for this beer.", location: "The Viking's Game",
                          image_url: "https://res.cloudinary.com/dslok1mwv/image/upload/v1495146941/marshall_beer_txnuxq.jpg")

checkin16 = Checkin.create(user_id: user7.id, beer_id: beer9.id, rating: 5,
                          review: "AWWWW MANNNNNN", location: "an awesome place",
                          image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495497377/05d03e9b9e8815f2ede51721ac774d61_rmryeu.jpg")
