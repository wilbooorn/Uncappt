import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handlePicClick(e){
    e.preventDefault();
    document.getElementById("nav-menu").classList.toggle("hidden");
  }

  handleSignOut(e){
    e.preventDefault();
    this.props.signout();
  }

  render(){
    let imageUrl;
    if(this.props.currentUser.image_url) {
      imageUrl = this.props.currentUser.image_url;
    } else {
      imageUrl = "http://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png";
    }
    return (
      <header className="main-nav">
        <div className="left-side-nav">
          <h1 className="nav-title">UNCAPP'T</h1>
          <h3 className="nav-tagline">Happy Hour. Every Hour.</h3>
        </div>

        <div className="right-side-nav">
          <h3 className="nav-explore">Explore Beers</h3>
          <img onClick={this.handlePicClick} className="nav-profile"
            src={imageUrl}></img>

          <ul className="hidden" id="nav-menu">
            <li className="nav-view-profile">View Profile</li>
            <li onClick = {this.handleSignOut}
              className="nav-signout">Sign Out</li>
          </ul>
        </div>

      </header>
    );
  }
}

export default NavBar;
