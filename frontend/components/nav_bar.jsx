import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className="main-nav">
        <h1 className="nav-title">UNCAPP'T</h1>
        <div className="right-side-nav">
          <h3 className="nav-explore">Explore Beers</h3>
          <img className="nav-profile"
            src="/assets/stock_pic.png"></img>
        </div>
      </header>
    );
  }
}

export default NavBar;
