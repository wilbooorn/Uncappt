import React from 'react';
import { Link } from 'react-router-dom';
import UploadButton from '../upload_button';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", fname: "", lname: "",
                  location: "", about: "", image_url: ""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.postImage = this.postImage.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
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

  postImage(url){
    let img = {url};
    $.ajax({
      method: "POST",
      url: "/api/images",
      data: {image: img},
      success: (image) => {
        this.setState({ image_url: image.url });
      }
    });
  }


  render(){
    let errors;
    if(this.props.errors){
      errors = this.props.errors.join(", ");
    }
    let image = <div></div>;
    if (this.state.image_url !== ""){
      image = <img className="signup-image" src={this.state.image_url} />;
    }
    return (
      <form className="sign-up-form">
        <h1 className="sign-in-title">UNCAPP'T</h1>
        <h3 className="errors">{errors}</h3>

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

        <h3 className="location">Where are you drinking?</h3>
        <input type="text" id="signup-location"
          value={this.state.location}
          placeholder="San Francisco, CA"
          onChange={this.handleLocation}>
        </input>

        <div className="signup-image-container">
          <UploadButton postImage={this.postImage} text="Upload Profile Picture"/>
          {image}
        </div>

        <button onClick={this.handleSubmit}
          className="signup-button">Sign Up</button>

        <div className="member">
          <p className="dif-member">Have an Account?</p>
          <a className="link" onClick={this.props.toggleForm}>Sign In Here </a>
        </div>

      </form>

    );
  }
}

export default SignUpForm;
