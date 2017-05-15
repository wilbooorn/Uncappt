import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

  }

  handleSignIn(e){
    e.preventDefault();
    alert("Clicked");
  }

  handleSignUp(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="splash">
        <div className="title">
          <h1>Uncapp't</h1>
        </div>

        <div className="buttons">
          <button className="signin-button"
            onClick={this.handleSignIn}>Sign In</button>
          <button className="signup-button"
            onClick={this.handleSignUp}>Sign up</button>
        </div>

        <video autoPlay loop id="vid" poster="/assets/beer3.png">
          <source src="/assets/beer3.mp4" type="video/mp4" />
          <source src="/assets/beer3.webm" type="video/webm" />
        </video>
      </div>
    );
  }
}

export default Splash;
