import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer';
import LoadingPage from '../loading_page';

class BeersIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: <LoadingPage />};
  }

  componentDidMount(){
    this.props.requestAllBeer();
    setTimeout(() => {
      this.setState({message:""});
    }, 2000);
  }

  render(){
    let beers;
    if (this.props.beers[0]){
      beers = this.props.beers.map((beer, idx) =>(
        <BeerIndexItem history={this.props.history} key={idx} beer={beer} />
      ));
      return (
        <div className="beers-index-container">
          <NavBarContainer page="index" history={this.props.history}/>
          <ul className="all-beers">
            <div className="all-the-beers">
              <h1>All Beers</h1>
            </div>
            {beers}
            <div className="add-beer-show">
              <p className="dif-member">Can't find what you're looking for?</p>
              <Link className="link" to="/beers/new">Add Your Favorite Beer</Link>
            </div>
          </ul>
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div className="no-beers-index-container">
          <NavBarContainer page="index" history={this.props.history}/>
          <ul className="all-beers">
            <div className="all-the-beers">
              <h1>All Beers</h1>
            </div>
            {this.state.message}
            <div className="add-beer-show">
              <p className="dif-member">Can't find what you're looking for?</p>
              <Link className="link" to="/beers/new">Add Your Favorite Beer</Link>
            </div>
          </ul>
          <Footer />
        </div>
      );
    }
  }
}

export default BeersIndex;
