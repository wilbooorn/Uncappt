import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state={ search: "" };

    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleExplore = this.handleExplore.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.change = this.change.bind(this);
    this.glass = this.glass.bind(this);
  }


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

  change(){
    let search = document.getElementById("beer-search").value;
    this.props.searchBeer(search);
    this.setState({ search });
  }

  glass(e){
    e.preventDefault();
    document.getElementById("beer-search").classList.toggle("no-show-nav");
  }

  render(){
    let search = <div></div>;
    if(this.props.page){

      search = <div className="search-container">
        <i onClick={this.glass} className="fa fa-search"></i>
        <input type="text" id="beer-search" value={this.state.search}
        placeholder="search beers" onChange={this.change} className="no-show-nav"/>
    </div>
    }
    let imageUrl;
    if(this.props.currentUser.image_url) {
      imageUrl = this.props.currentUser.image_url;
    } else {
      imageUrl = "https://res.cloudinary.com/dslok1mwv/image/upload/v1494966538/stock_pic_yucizf.png";
    }
    return (
      <header className="main-nav">
        <div className="left-side-nav"
          onClick={this.handleLogo}>
          <h1 className="nav-title">UNCAPP'T</h1>
          <h3 className="nav-tagline">Happy Hour. Every Hour.</h3>
        </div>

        <div className="right-side-nav">

          {search}
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
