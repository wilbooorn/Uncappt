import React from 'react';
import NavBarContainer from './nav_bar_container';
import Footer from './footer';
import CheckinIndexContainer from './checkin/checkin_index_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBarContainer history={this.props.history}/>
        <a name="top-of-page"></a>
        <h1>This is the homepage</h1>
        <CheckinIndexContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
