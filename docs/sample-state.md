```js

{
  session: {
    currentUser: {
      id: 1,
      username: "robin"
    },
    errors: []
  },

  beers: {
    1: {
      id: 1,
      name: "Watermelon Dorado",
      description: "Double IPA made with mash, kettle, and dry hopping blend to create a huge hop profile that is balanced with a blast of watermelon.",
      brewery: "Ballast Point",
      abv: 10,
      ibu: 90,
      style: "Double IPA",
      image_url: "./assets/image.url"
    }
  },

  beer: {
    id: 1,
    name: "Watermelon Dorado",
    description: "Double IPA made with mash, kettle, and dry hopping blend to create a huge hop profile that is balanced with a blast of watermelon.",
    brewery: "Ballast Point",
    abv: 10,
    ibu: 90,
    style: "Double IPA",
    image_url: "./assets/image.url"
  },

  checkins: {
    1: {
      user_id: 1,
      beer_id: 1,
      rating: 5,
      address: "160 Spear St. San Francisco, CA",
      review: "This is the greatest beverage I have ever consumed",
      image_url: "image/url.com"
    }
  }

  like: {
    user_id: 1,
    checkin_id: 2
  }
}

```
