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

  componentWillReceiveProps(newProps){
    if(newProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchOneUser(newProps.match.params.userId);
    }
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    if(this.props.user.id){
      return (
        <div>
          <NavBarContainer history={this.props.history} />
          <div className="user-profile-container">
            <div className="user-info-container">
              <div className="user-profile-image">
                <img src={this.props.user.image_url} />
              </div>
              <div className="user-info">
                <h1>{this.props.user.username}</h1>
                <div className="user-stats">
                  <h3>Checkins:</h3>
                  <h3>{this.props.user.checkins.length}</h3>
                </div>
              </div>
            </div>
          </div>
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
