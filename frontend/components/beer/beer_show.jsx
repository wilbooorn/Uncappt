import React from 'react';
import NavBarContainer from '../nav_bar_container';
import BeerIndexItem from './beer_index_item';

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
    console.log(this.props);
    if(this.props.beer.name){
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <BeerIndexItem beer={this.props.beer} />
        </div>
      );
    }
    else{
      return (
        <div>
          <NavBarContainer history={this.props.history}/>
          <div className="error">
            <h1>BEER NOT FOUND :(</h1>
          </div>
        </div>
      );
    }
  }
}

export default BeerShow;
