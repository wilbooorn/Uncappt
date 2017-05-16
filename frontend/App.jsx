import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Splash from './components/splash';
import SignInFormContainer from './components/auth/sign_in_form_container';
import SignUpFormContainer from './components/auth/sign_up_form_container';
import Home from './components/home';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path ="/signin" component={SignInFormContainer} />
      <AuthRoute exact path ="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/home" component={Home} />
      <AuthRoute exact path="/" component={Splash}/>
    </Switch>
  </div>
);

export default App;
