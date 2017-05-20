import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';

class CheckinShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchOneCheckin(this.props.match.params.checkinId);
  }

  render(){
    console.log(this.props.checkin);
    return (
      <div>
        <NavBarContainer history={this.props.history} />
        <h1>Checkin Show</h1>
        <Footer />
      </div>
    );
  }
}

export default CheckinShow;
