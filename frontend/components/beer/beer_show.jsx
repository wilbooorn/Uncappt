import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer';
import CheckinIndexContainer from '../checkin/checkin_index_container';

class BeerShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: "Loading..."};
  }

  componentDidMount(){
    this.props.requestOneBeer(this.props.match.params.beerId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.beerId !== this.props.match.params.beerId){
      this.props.requestOneBeer(newProps.match.params.beerId);
    }
    setTimeout(() => {
      this.setState({message:"Beer Not Found"});
    }, 1000);
  }

  render(){

    if(this.props.beer.name){
      return (
        <div className="beer-show-container">
          <NavBarContainer history={this.props.history}/>
          <BeerIndexItem page="show" deleteBeer={this.props.deleteBeer} beer={this.props.beer} history={this.props.history} />
          <CheckinIndexContainer beerCheckins={this.props.beer.checkins} />
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
            <h1 className="load-message">{this.state.message}</h1>

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
