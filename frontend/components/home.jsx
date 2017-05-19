import React from 'react';
import NavBarContainer from './nav_bar_container';
import Footer from './footer';
import CheckinIndexContainer from './checkin/checkin_index_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "home-container">
        <NavBarContainer history={this.props.history}/>
        <a name="top-of-page"></a>
        <CheckinIndexContainer currentUser={this.props.currentUser} />
        <Footer />
      </div>
    );
  }
}

export default Home;
