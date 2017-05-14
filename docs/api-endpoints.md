# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


## JSON API

### Users

- `POST /api/users`

  - `signs in user`


- `GET /api/users/:id`

  - `retrieves user show`


- `PATCH /api/users/:id`

  - `edit user`


- `DELETE /api/users/id`

  - `deletes user`


### Session

- `POST /session`

  - `signs user in`


- `DELETE /session`

  - `signs user out`


### Beers

- `GET /api/beers`

  - `retrieves all beers`


- `GET /api/beers/:id`

  - `retrieves beer show`


- `POST /api/beers`

  - `creates new beer`


- `PATCH /api/beers/:id`

  - `edits existing beer`


### Checkins

- `GET /api/checkins`

  - `retrieves all checkins`


- `GET /api/beer/:id/checkins`

  - `retrieves beer specific checkins`


- `GET /api/user/:id/checkins`

  - `retrieves user specific checkins`


- `POST /api/beer/:id/checkins`

  - `creates checkin for current user`


- `DELETE /api/checkins/:id`

  - `deletes checkin`


### Checkin Comments

- `POST /api/checkin/:id/comments`

  - `creates checkin comment`


- `PATCH /api/comments/:id`

  - `edits comment`


- `DELETE /api/comments/:id`

  - `deletes comment`


### Checkin "Cheers" (Likes for Checkins)

- `POST /api/checkin/checkin_cheers/`

  - `cheers (likes) checkin`


- `DELETE /api/checkin_cheers/:id`

  - `deletes checkin cheers`
