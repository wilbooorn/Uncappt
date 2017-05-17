import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';

class BeersIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBeer();
  }

  render(){
    let beers;
    if (this.props.beers[0]){
      beers = this.props.beers.map((beer, idx) =>(
        <BeerIndexItem key={idx} beer={beer} />
      ));
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <ul className="all-beers">
            {beers}
          </ul>
        </div>
      );
    }
    return <div></div>;
  }
}

export default BeersIndex;
