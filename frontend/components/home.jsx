import React from 'react';
import NavBarContainer from './nav_bar_container';
class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBarContainer history={this.props.history}/>
        <h1>This is the homepage</h1>
      </div>
    );
  }
}

export default Home;
