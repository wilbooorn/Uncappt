import React from 'react';

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e){
    e.preventDefault();
    this.props.signin(this.state);
  }

  render(){
    console.log(this.props);
    return (
      <form>
        <input type="text" id="signin-username"
          value={this.state.username}
          onChange={this.handleUsername}>
        </input>

        <input type="password" id="signin-password"
          value={this.state.password}
          onChange={this.handlePassword}>
        </input>

        <button onClick={this.handleSubmit}>Sign In</button>

      </form>
    );
  }
}

export default SignInForm;
