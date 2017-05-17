import React from 'react';

class BeerIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  handleTitleClick(e){
    e.preventDefault();
    let url = "/beers/" + this.props.beer.id;
    this.props.history.push(url);
  }

  handlePlus(e){
    e.preventDefault();
    alert("Check-Ins not implemented yet!");
  }

  render(){
    return (
      <li className="beer-show">
        <div className="main-beer-show">
          <div className="top-beer-show">
            <div className="beer-image-container">
              <img src={this.props.beer.image_url} className="beer-image">
              </img>
            </div>

            <div className="beer-info">
              <div className="title-and-add">
                <div className="top-left-beer">
                  <p className="beer-title"
                    onClick={this.handleTitleClick}>{this.props.beer.name}</p>
                  <p className="beer-brewery">{this.props.beer.brewery}</p>
                </div>
                <div className="beer-plus">
                  <p onClick={this.handlePlus} className="beer-plus-img">+</p>
                </div>
              </div>
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
