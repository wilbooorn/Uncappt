import React from 'react';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBarContainer history={this.props.history} />
        <h1>Profile Page</h1>
        <Footer />
      </div>
    );
  }

}

export default UserProfile;
