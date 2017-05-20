import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer';
import CheckinIndexContainer from '../checkin/checkin_index_container';

class BeerShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.beerId !== this.props.match.params.beerId){
      this.props.requestOneBeer(newProps.match.params.beerId);
    }
  }

  render(){
    const beer = this.props.beers[this.props.match.params.beerId];
    console.log(beer);
    if(beer){
      return (
        <div className="beer-show-container">
          <NavBarContainer history={this.props.history}/>
          <BeerIndexItem page="show" deleteBeer={this.props.deleteBeer} beer={beer} history={this.props.history} />
          <CheckinIndexContainer beerCheckins={beer.checkins} currentUser={this.props.currentUser}/>
          <Link className="back-to-beers" to="/beers">Back to All Beers</Link>
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div className="beer-show-container">
          <NavBarContainer history={this.props.history}/>
          <div className="error">
            <h1>BEER NOT FOUND :(</h1>

            <div className="back-to-beers">
              <Link className='back-to-beers-link' to="/beers/">Back to All Beers</Link>
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default BeerShow;
