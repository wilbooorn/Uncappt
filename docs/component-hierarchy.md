## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Nav Bar
 - Sidebar (?)

**BeersContainer**
  - Beer Header
  - BeerIndex

**BeerIndex**
 - BeerIndexItem
 - BeerDetail

**NewBeerContainer**
  - New Beer Form

**CheckinsContainer**
  - Checkins Header
  - CheckinIndex

**CheckinsIndex**
 - CheckinIndexItem
 - CheckinDetail

**NewCheckinContainer**
  - New Checkin Form

**NewBeerContainer**
  - New Beer Form

**UserProfile**
  - UserDetail
  - CheckinIndex


## Routes
| Path                            | Component            |
|---------------------------------|----------------------|
| "/"                             | "Splashpage"         |
| "/signup"                       | "AuthFormContainer"  |
| "/login"                        | "AuthFormContainer"  |
| "/home"                         | "HomeContainer"      |
| "/home/beers/"                  | "BeersContainer"     |
| "/home/beers/:beer_id"          | "ShowBeerContainer"  |
| "/home/users/:userId"           | "ProfileContainer"   |
| "/home/users/:userId/check_ins" | "CheckinsContainer"  |
| "/home/feed/"                   | "CheckinsContainer"  |
