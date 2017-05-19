import React from 'react';

class CheckinIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.checkin.user);
    return(
      <li>
        <p>{this.props.checkin.review}</p>
      </li>
    );
  }
}

export default CheckinIndexItem;
