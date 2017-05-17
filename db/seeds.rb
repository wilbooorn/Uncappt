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
                    brewery: "Ballast Point", abv: 10, ibu: 90, style: "IPA")
