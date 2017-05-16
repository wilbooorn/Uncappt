import React from 'react';
import {Link} from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", fname: "", lname: "",
                  location: "", about: "", image_url: ""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
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

  handleFname(e){
    e.preventDefault();
    let fname = document.getElementById("signup-fname").value;
    this.setState({fname});
  }

  handleLname(e){
    e.preventDefault();
    let lname = document.getElementById("signup-lname").value;
    this.setState({lname});
  }

  handleAbout(e){
    e.preventDefault();
    let about = document.getElementById("signup-about").value;
    this.setState({about});
  }

  handleLocation(e){
    e.preventDefault();
    let location = document.getElementById("signup-location").value;
    this.setState({location});
  }


  render(){
    return (
      <div className="sign-up-container">
        <h1>Sign Up!</h1>
        <form className="sign-up-form">
          <h3>First Name</h3>
          <input type="text" id="signup-fname"
            value={this.state.fname}
            onChange={this.handleFname}>
          </input>

          <h3>Last Name</h3>
          <input type="text" id="signup-lname"
            value={this.state.lname}
            onChange={this.handleLname}>
          </input>

          <h3>Username</h3>
          <input type="text" id="signup-username"
            value={this.state.username}
            onChange={this.handleUsername}>
          </input>

          <h3>Password</h3>
          <input type="password" id="signup-password"
            value={this.state.password}
            onChange={this.handlePassword}>
          </input>


          <h3>Tell us about yourself! (Optional)</h3>
          <input type="password" id="signup-about"
            value={this.state.about}
            onChange={this.handleAbout}>
          </input>


          <h3>Where are you drinkin?</h3>
          <input type="password" id="signup-location"
            value={this.state.location}
            placeholder="San Francisco, CA"
            onChange={this.handleLocation}>

          </input>



          <button onClick={this.handleSubmit}
            className="sign-up-button">Sign Up</button>

          <p>Have an Account?</p>
          <Link to="/signin">Sign In Here</Link>

        </form>

      </div>
    );
  }
}

export default SignUpForm;
