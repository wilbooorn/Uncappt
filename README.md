# UNCAPP'T

[UNCAPP'T Live][uncappt]

[uncappt]: http://www.uncappt.com/#/

Uncapp't is a full stack web application inspired by Untappd. Our mission is to unite beer connoisseurs everywhere in the lifelong quest to try the world's best beers. The app provides functionality to add new beers, "checkin" to a beer, and say "cheers" to beers others are drinking globally.

UNCAPP'T is built on a Ruby on Rails backend with a PostrgeSQL database, and a React.js/Redux frontend.

## Technologies Used
* Ruby
* Rails
* Javascript
* React.js
* Redux
* PostrgeSQL
* Cloudinary API

## Features

### User Authentication

Authentication for Untapp'd is implemented both on the frontend and the backend. On the backend, user passwords are hashed and salted using BCrpyt to ensure no password data is stored or accessible. On the front end, all pages except the splash page are restricted to logged in users. When the DOM is fully loaded, the app checks for a current user set by Rails via session token. If there is no user logged in, all routes will be redirected to the splash page which contains the sign in and sign up forms, which are rendered as modals by the modal component.

![User Auth Ruby Code](https://res.cloudinary.com/dslok1mwv/image/upload/v1495731074/Screen_Shot_2017-05-25_at_9.50.38_AM_u8hkxs.png)

### Beer Search

By default, all beers are displayed on the beers index page. The beers index page features a magnifying glass that, when clicked, reveals a search field. Using the PG Search gem and a custom search query attached to an AJAX call to the server, beers can be searched by either their name, or their brewery's name. The beers displayed on the beers index will update with records that match the search query.

![Search GIF](http://res.cloudinary.com/dslok1mwv/image/upload/dl_70/v1495745271/search_yd7kpu.gif)


## Future Directions for the Project

### Comments
Post and delete comments on other users' checkins.

### Sorting
Sort beers by various criteria, such as highest rated, or most checkins, and sort checkins by most likes, or time created.

### Friendships
Users can have friends and there will be a custom feed to only see friends' checkins, rather than global checkins.

### Badges
Users can earn badges for different achievements, such as number of checkins, number of unique beers tried, etc.

## Design Docs
* [Wireframes][wireframes]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[sample-state]: /docs/sample-state.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md
