import React from 'react';

class BeersIndex extends React.Componenet {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllBeer();
  }

  render(){
    if (this.props.beers[0]){
      return (
        <ul>
          <li>{this.props.beers[0].name}</li>
        </ul>
      );
    }
  }
}

export default BeersIndex;
