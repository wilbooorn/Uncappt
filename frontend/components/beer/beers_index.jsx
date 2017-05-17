import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';
import {Link} from 'react-router-dom';

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
        <BeerIndexItem history={this.props.history} key={idx} beer={beer} />
      ));
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <ul className="all-beers">
            <div className="all-the-beers">
              <h1>All Beers</h1>
            </div>
            {beers}
            <div className="add-beer-show">
              <p className="dif-member">Can't find what you're looking for?</p>
              <Link className="link" to="/beers/new">Add You Favorite Beer</Link>
            </div>
          </ul>
        </div>
      );
    }
    return <div></div>;
  }
}

export default BeersIndex;
