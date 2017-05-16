import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", fname: "", lname: "",
                  location: "", about: "", image_url: ""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleUsername(e){
    e.preventDefault();
    let username = document.getElementById("signup-username").value;
    this.setState({username});
  }

  handlePassword(e){
    e.preventDefault();
    let password = document.getElementById("signup-password").value;
    this.setState({password});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleLocation(e){
    e.preventDefault();
    let location = document.getElementById("signup-location").value;
    this.setState({location});
  }


  render(){
    return (
      <div className="sign-up-container">
        <form className="sign-up-form">
          <h1 className="sign-in-title">UNCAPP'T</h1>
          <h3 className="errors">{this.props.errors}</h3>

          <input type="text" id="signup-username"
            value={this.state.username}
            onChange={this.handleUsername}
            placeholder="username">
          </input>

          <input type="password" id="signup-password"
            value={this.state.password}
            onChange={this.handlePassword}
            placeholder="password">
          </input>

          <h3 className="location">Where are you drinkin?</h3>
          <input type="text" id="signup-location"
            value={this.state.location}
            placeholder="San Francisco, CA"
            onChange={this.handleLocation}>

          </input>

          <button onClick={this.handleSubmit}
            className="signup-button">Sign Up</button>

          <div className="member">
            <p className="dif-member">Have an Account?</p>
            <Link to="/signin">Sign In Here</Link>
          </div>

        </form>

      </div>
    );
  }
}

export default SignUpForm;
