import React from 'react';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';
import CheckinIndexContainer from '../checkin/checkin_index_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchOneUser(this.props.match.params.userId);
  }

  render(){
    if(this.props.user.id){
      return (
        <div>
          <NavBarContainer history={this.props.history} />
          <CheckinIndexContainer beerCheckins={this.props.user.checkins} history={this.props.history} />
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div></div>
      );
    }
  }

}

export default UserProfile;
