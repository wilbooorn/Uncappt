import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleExplore = this.handleExplore.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  // componentDidMount(){
  //   document.getElementById("nav-menu").classList.add("hidden");
  // }

  toggleHidden(){
    document.getElementById("nav-menu").classList.toggle("hidden");
    document.removeEventListener("click", this.toggleHidden);
  }

  handlePicClick(e){
    e.preventDefault();
    this.toggleHidden();
    document.addEventListener("click", this.toggleHidden);
  }

  handleSignOut(e){
    e.preventDefault();
    this.props.signout();
  }

  handleExplore(e){
    e.preventDefault();
    if(!document.getElementById("nav-menu").classList.contains("hidden")){
      this.toggleHidden();
    }
    this.props.history.push("/beers");
  }

  handleLogo(e){
    e.preventDefault();
    if(!document.getElementById("nav-menu").classList.contains("hidden")){
      this.toggleHidden();
    }
    this.props.history.push('/home');
  }

  handleProfile(e){
    e.preventDefault();
    this.toggleHidden();
    let url = `/users/${this.props.currentUser.id}`;
    this.props.history.push(url);
  }

  render(){
    let imageUrl;
    if(this.props.currentUser.image_url) {
      imageUrl = this.props.currentUser.image_url;
    } else {
      imageUrl = "https://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png";
    }
    console.log(this.props);
    return (
      <header className="main-nav">
        <div className="left-side-nav"
          onClick={this.handleLogo}>
          <h1 className="nav-title">UNCAPP'T</h1>
          <h3 className="nav-tagline">Happy Hour. Every Hour.</h3>
        </div>

        <div className="right-side-nav">
          <h3 className="nav-explore"
            onClick={this.handleExplore}>Explore Beers
          </h3>
          <img onClick={this.handlePicClick} className="nav-profile"
            src={imageUrl}></img>

          <ul className="hidden" id="nav-menu">
            <li  onClick={this.handleProfile}
              className="nav-view-profile">View Profile</li>
            <li onClick = {this.handleSignOut}
              className="nav-signout">Sign Out</li>
          </ul>
        </div>

      </header>
    );
  }
}

export default NavBar;
