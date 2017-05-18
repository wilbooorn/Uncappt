import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';
import {Link} from 'react-router-dom';

class BeerShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestOneBeer(this.props.match.params.beerId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.beerId !== this.props.match.params.beerId){
      this.props.requestOneBeer(newProps.match.params.beerId);
    }
  }

  render(){
    if(this.props.beer.name){
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <BeerIndexItem beer={this.props.beer} />
          <Link className="back-to-beers" to="/beers/">Back to All Beers</Link>
        </div>
      );
    }
    else{
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <div className="error">
            <h1>BEER NOT FOUND :(</h1>

            <div className="back-to-beers">
              <Link className='back-to-beers-link' to="/beers/">Back to All Beers</Link>
            </div>

          </div>
        </div>
      );
    }
  }
}

export default BeerShow;
