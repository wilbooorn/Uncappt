import React from 'react';

class CheckinIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        {this.props.checkin.review}
      </li>
    );
  }
}

export default CheckinIndexItem;
