import React from 'react';
import NavBarContainer from '../nav_bar_container';

class NewBeerForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBarContainer history={this.props.history} />
        <h1>New Beer Form</h1>
      </div>
    );
  }
}

export default NewBeerForm;
