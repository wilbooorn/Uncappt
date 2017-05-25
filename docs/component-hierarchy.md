## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Nav Bar
 - Sidebar (?)

**BeersContainer**
  - BeerHeader
  - BeerIndex

**BeerIndex**
 - BeerIndexItem
 - BeerDetail

**NewBeerContainer**
  - New Beer Form

**CheckinsContainer**
  - CheckinsHeader
  - CheckinIndex

**CheckinsIndex**
 - CheckinIndexItem
 - CheckinDetail

**NewCheckinContainer**
  - New Checkin Form

**ProfileContainer**
  - UserDetail
  - CheckinIndex


## Routes
| Path                            | Component            |
|---------------------------------|----------------------|
| "/"                             | "Splashpage"         |
| "/home"                         | "HomeContainer"      |
| "/home/beers/"                  | "BeersContainer"     |
| "/home/beers/:beer_id"          | "BeersContainer"     |
| "/home/users/:userId"           | "ProfileContainer"   |
| "/home/feed/"                   | "CheckinsContainer"  |
