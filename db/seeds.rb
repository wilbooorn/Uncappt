# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Guest", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png");
user2 = User.create(username: "robin", password: "password", image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgjAAAAJGZiMGM3MWZkLTNjYTMtNDFiYS1hZGExLTA5ZTZiZmNjYWU2MQ.jpg");


beer1 = Beer.create(name: "Watermelon Dorado", description: "Mash, kettle, and dry hopping blend to create a huge hop profile that is balanced with a blast of watermelon.",
                    brewery: "Ballast Point", abv: 10, ibu: 90, style: "IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495037478/watermlon_dorago_ywek0y.png")

beer2 = Beer.create(name: "Ruination", description: "Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. Dry hopping and hop bursting squeeze every last drop of piney, citrusy, tropical essence from the hops",
                    brewery: "Stone Brewing Company", abv: 8.5, ibu: 100, style: "Double IPA",
                    image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495041225/rui_bottle_cvhbiz.png")
