import React from 'react';
import NavBarContainer from '../nav_bar_container';

class BeersIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBeer();
  }

  render(){
    if (this.props.beers[0]){
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <ul>
            <li>{this.props.beers[0].name}</li>
          </ul>
        </div>
      );
    }
    return <div></div>;
  }
}

export default BeersIndex;
