import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer';
import CheckinIndexContainer from '../checkin/checkin_index_container';
import LoadingPage from '../loading_page';

class BeerShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: "Loading...", loading: <LoadingPage />};
  }

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.requestOneBeer(this.props.match.params.beerId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.beerId !== this.props.match.params.beerId){
      this.props.requestOneBeer(newProps.match.params.beerId);
    }
    setTimeout(() => {
      this.setState({message:"Beer Not Found", loading: ""});
    }, 2000);
  }

  componentWillUnmount(){
    this.props.clearBeer();
  }

  render(){
    let checkinInfo;

    if(this.props.beer.name){
      if (this.props.beer.checkins[0]){
        checkinInfo = <CheckinIndexContainer beerCheckins={this.props.beer.checkins} />;
      } else {
        checkinInfo = <h3 className="no-checkin-header">No Checkins Yet</h3>;
      }
      return (
        <div className="beer-show-container">
          <NavBarContainer history={this.props.history}/>
          <BeerIndexItem page="show" deleteBeer={this.props.deleteBeer} beer={this.props.beer} history={this.props.history} />
          {checkinInfo}
          <Link className="back-to-beers" to="/beers">Back to All Beers</Link>
          <Footer />
        </div>
      );
    }
    else{

      return (
        <div className="beer-no-show-container">
          <NavBarContainer history={this.props.history}/>
          <div className="error">
            <h1 className="load-message">{this.state.message}</h1>
            {this.state.loading}
            <div className="back-to-beers">
              <Link className='back-to-beers-link' to="/beers/">Back to All Beers</Link>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default BeerShow;
