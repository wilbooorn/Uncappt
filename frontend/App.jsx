import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import Splash from './components/splash';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Splash}/>
  </div>
);

export default App;
