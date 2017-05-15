import React from 'react';

const Splash = () => (
  <div>
    <h1>Welcome to Uncapp't</h1>
    <button className="signin-button">Sign In</button>
    <button className="signup-button">Sign up</button>
    <video autoPlay loop id="vid" poster="/assets/beer3.png">
      <source src="/assets/beer3.mp4" type="video/mp4" />
      <source src="/assets/beer3.webm" type="video/webm" />
    </video>
  </div>
);

export default Splash;
