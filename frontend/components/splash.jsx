import React from 'react';
import { Redirect } from 'react-router';

class Splash extends React.Component{
  constructor(props){
    super(props);

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

  }

  handleSignIn(e){
    e.preventDefault();
    this.props.history.push("/signin");
  }

  handleSignUp(e){
    e.preventDefault();
    this.props.history.push("/signup");
  }

  render(){
    return (
      <div className="splash">
        <div className="title">
          <h1 className="logo">UNCAPP'T</h1>
          <h4 className="tagline">Happy Hour. Every Hour.</h4>
        </div>

        <div className="buttons">
          <button className="main-signin-button"
            onClick={this.handleSignIn}>Sign In</button>
          <button className="main-signup-button"
            onClick={this.handleSignUp}>Sign up</button>
        </div>

        <video autoPlay loop id="vid"
          poster="http://res.cloudinary.com/dslok1mwv/image/upload/v1494966533/beer3_cdlhxc.png">
          <source src="/assets/beer3.mp4" type="video/mp4" />
          <source src="http://res.cloudinary.com/dslok1mwv/video/upload/v1494966540/beer3_snrkmy.webm"
             type="video/webm" />
        </video>

      </div>
    );
  }
}

export default Splash;
