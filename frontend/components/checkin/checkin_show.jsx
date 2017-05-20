import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';

class CheckinShow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
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
