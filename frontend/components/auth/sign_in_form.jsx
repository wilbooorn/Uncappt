import React from 'react';
import {Link} from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleUsername(e){
    e.preventDefault();
    let username = document.getElementById("signin-username").value;
    this.setState({username});
  }

  handlePassword(e){
    e.preventDefault();
    let password = document.getElementById("signin-password").value;
    this.setState({password});
  }

  handleGuest(e){
    e.preventDefault();
    this.setState({username: "Guest", password: "password"}, () => {
     setTimeout(() => { this.props.signin(this.state); }, 500);
   });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signin(this.state);
  }

  render(){
    return (
      <div className="sign-in-container">
          <form className="sign-in-form">
          <h1 className="sign-in-title">UNCAPP'T</h1>
          <h3 className="errors">{this.props.errors}</h3>

          <input type="text" id="signin-username"
            value={this.state.username}
            onChange={this.handleUsername}
            placeholder="username">
          </input>

          <input type="password" id="signin-password"
            value={this.state.password}
            onChange={this.handlePassword}
            placeholder="password">
          </input>

          <button onClick={this.handleSubmit}
            className="sign-in-button">Sign In</button>
          <p className="or">-- OR --</p>
          <button onClick={this.handleGuest}
            className="demo-button">Continue as a Guest</button>

          <div className="member">
            <p className="dif-member">Not a member?</p>
            <Link className="link" to="/signup">Sign Up Here </Link>
          </div>

        </form>

      </div>
    );
  }
}

export default SignInForm;
