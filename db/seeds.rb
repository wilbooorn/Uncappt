# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Guest", password: "password", image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png");
user1 = User.create(username: "robin", password: "password", image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgjAAAAJGZiMGM3MWZkLTNjYTMtNDFiYS1hZGExLTA5ZTZiZmNjYWU2MQ.jpg");
