# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |
fname           | string    | not null
lname           | string    | not null
about           | text      |
image_url       | string    |


## beers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
description | text      | not null
brewery     | string    | not null
abv         | float     | not null
ibu         | float     | not null
style       | string    | not null
image_url   | string    |

## checkins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
beer_id     | integer   | not null, foreign key (references beers), indexed
rating      | integer   | not null
address     | string    |
lat         | float     |
lon         | float     |
review      | text      |
image_url   | string    |

## checkin_cheers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
checkin_id  | integer   | not null, foreign key (references checkins), indexed

## checkin_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
checkin_id  | integer   | not null, foreign key (references checkins), indexed
comment     | text      | not null
