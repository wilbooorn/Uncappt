import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import Splash from './components/splash';
import SignInFormContainer from './components/auth/sign_in_form_container';
import SignUpForm from './components/auth/sign_up_form';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path ="/signin" component={SignInFormContainer} />
      <AuthRoute exact path ="/signup" component={SignUpForm} />
      <AuthRoute exact path="/" component={Splash}/>
    </Switch>
  </div>
);

export default App;
