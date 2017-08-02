import React from 'react';
import NavBarContainer from '../nav_bar_container';
import CheckinIndexItemContainer from './checkin_index_item_container';

class CheckinIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.fetchAllCheckins();
  }

  render(){
    let checkins;
    if (this.props.beerCheckins){
      checkins = this.props.beerCheckins.map((checkin, idx) =>(
        <CheckinIndexItemContainer history={this.props.history}
                                   key={idx} checkin={checkin} />
      ))
      .sort((a, b) =>
        new Date(b.props.checkin.created_at) - new Date(a.props.checkin.created_at)
      );
      return (
        <div className="checkin-list-container">
          <ul className="checkin-list">
            <div className="all-the-checkins">
              <h1>Checkins</h1>
            </div>
            {checkins}
          </ul>
        </div>
      );
    }
    else if(this.props.checkins[0]){
      if(this.props.checkins[0].id){
        checkins = this.props.checkins.map((checkin, idx) =>(
          <CheckinIndexItemContainer history={this.props.history}
                                     key={idx} checkin={checkin} />
        ))
        .sort((a, b) =>
          new Date(b.props.checkin.created_at) - new Date(a.props.checkin.created_at)
        );
        return (
          <div className="checkin-list-container">
            <ul className="checkin-list">
              <div className="all-the-checkins">
                <h1>Global Checkins</h1>
              </div>
              {checkins}
            </ul>
          </div>
        );
      }
      else{
        return <div></div>;
      }
    }
    else{
      return <div></div>;
    }
  }
}

export default CheckinIndex;
