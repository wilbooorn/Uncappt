import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';

class CheckinShow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const checkin = this.props.checkins[this.props.match.params.checkinId];
    if(checkin){
      return (
        <div>
          <NavBarContainer history={this.props.history} />
          <div className="checkin-list-container">
            <ul className = 'checkin-list checkin-show'>
              <CheckinIndexItem page="show" checkin={checkin} deleteCheckin={this.props.deleteCheckin} history={this.props.history} currentUser={this.props.currentUser}/>
            </ul>
          </div>
          <Footer />
        </div>
      );
    }
    else{
      return <div></div>;
    }
  }
}

export default CheckinShow;
