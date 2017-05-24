import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Splash from './components/splash';
import SignInFormContainer from './components/auth/sign_in_form_container';
import SignUpFormContainer from './components/auth/sign_up_form_container';
import BeersIndexContainer from './components/beer/beers_index_container';
import BeerShowContainer from './components/beer/beer_show_container';
import NewBeerFormContainer from './components/beer/new_beer_form_container';
import CheckinShowContainer from './components/checkin/checkin_show_container';
import NewCheckinModalContainer from './components/checkin/new_checkin_modal_container';
import UserProfileContainer from './components/user/user_profile_container';
import Home from './components/home';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path="/beers" component={BeersIndexContainer} />
      <ProtectedRoute exact path="/beers/new" component={NewBeerFormContainer} />
      <ProtectedRoute exact path="/beers/:beerId" component={BeerShowContainer} />
      <ProtectedRoute exact path="/beers/:beerId/edit" component={NewBeerFormContainer} />
      <ProtectedRoute exact path="/checkins/:checkinId" component={CheckinShowContainer} />
      <ProtectedRoute exact path="/checkins/:beerId/new" component={NewCheckinModalContainer} />
      <ProtectedRoute exact path="/checkins/:checkinId/edit" component={NewCheckinModalContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <AuthRoute exact path="/" component={Splash}/>
    </Switch>
  </div>
);

export default App;
