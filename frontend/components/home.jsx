import React from 'react';
import NavBar from './nav_bar';
class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBar />
        <h1>This is the homepage</h1>
      </div>
    );
  }
}

export default Home;
