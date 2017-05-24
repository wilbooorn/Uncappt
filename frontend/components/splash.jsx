import React from 'react';
import { Redirect } from 'react-router';
import Modal from 'react-modal';
import SignUpFormContainer from './auth/sign_up_form_container';
import SignInFormContainer from './auth/sign_in_form_container';

class Splash extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      signupModalOpen: false,
      signinModalOpen: false
    };

    this.openSigninModal = this.openSigninModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentWillMount(){
    Modal.setAppElement('body');
    console.log(Modal.defaultStyles);
    Modal.defaultStyles.content.border = "none";
    Modal.defaultStyles.content.background = "transparent";
    Modal.defaultStyles.overlay.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }

  toggleForm(){
    if(this.state.signupModalOpen){
      this.openSigninModal();
    }
    else{
      this.openSignupModal();
      }
  }

  openSignupModal(){
    this.setState({ signupModalOpen: true, signinModalOpen: false} );
  }

  openSigninModal(){
    this.setState({ signupModalOpen: false, signinModalOpen: true} );
  }

  closeModal(){
    this.setState({ signupModalOpen: false, signinModalOpen: false} );
  }

  handleSignIn(e){
    e.preventDefault();
    this.openSigninModal();
  }

  handleSignUp(e){
    e.preventDefault();
    this.openSignupModal();
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

        <Modal
          isOpen={this.state.signupModalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.closeModal}
          contentLabel="Signup Modal"
          className="signup-modal">

          <SignUpFormContainer toggleForm={this.toggleForm} />
        </Modal>

        <Modal
          isOpen={this.state.signinModalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.closeModal}
          contentLabel="Signin Modal"
          className="signin-modal">

          <SignInFormContainer toggleForm={this.toggleForm} />
        </Modal>

        <video autoPlay loop id="vid"
          poster="https://res.cloudinary.com/dslok1mwv/image/upload/v1494966533/beer3_cdlhxc.png">
          <source src="https://s3-us-west-1.amazonaws.com/untappd-vid/Beer+Pour+H264.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/dslok1mwv/video/upload/v1494966540/beer3_snrkmy.webm"
             type="video/webm" />
        </video>



      </div>
    );
  }
}

export default Splash;
