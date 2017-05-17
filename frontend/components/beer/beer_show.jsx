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
    return (
      <div>
        <NavBarContainer history={this.props.history}/>
        <BeerIndexItem beer={this.props.beer} />
      </div>
    );
  }
}

export default BeerShow;
