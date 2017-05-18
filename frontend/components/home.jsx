import React from 'react';
import NavBarContainer from './nav_bar_container';
import Footer from './footer';
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
        <Footer />
      </div>
    );
  }
}

export default Home;
