import React from 'react';

class BeerIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="beer-show">
        <div className="main-beer-show">
          <div className="top-beer-show">
            <img className="beer-image"
              src={this.props.beer.image_url} />

            <div className="beer-info">
              <p className="beer-title">{this.props.beer.name}</p>
              <p className="beer-brewery">{this.props.beer.brewery}</p>
              <p className="beer-style">{this.props.beer.style}</p>
              <p className="beer-description">{this.props.beer.description}</p>
            </div>
          </div>

          <div className="bottom-beer-show">
            <p className='beer-abv'> ABV: {this.props.beer.abv}</p>
            <p className='beer-ibu'> IBU: {this.props.beer.ibu}</p>
          </div>
        </div>
      </li>
    );
  }
}


export default BeerIndexItem;
