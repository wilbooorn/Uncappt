import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

class BeerIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    if (confirm("Are you sure you want to delete this beer?")){
      this.props.deleteBeer(this.props.beer.id);
      this.props.history.push("/beers");
    }
  }

  handleTitleClick(e){
    e.preventDefault();
    let url = "/beers/" + this.props.beer.id;
    this.props.history.push(url);
  }

  handlePlus(e){
    e.preventDefault();
    let url = `/checkins/${this.props.beer.id}/new`;
    this.props.history.push(url);
  }

  render(){
    let editUrl = "/beers/" + this.props.beer.id + "/edit";
    let editInfo= <div></div>;
    if (this.props.page){
      editInfo = <div className="edit-delete">
        <Link className="edit-beer-link"to={editUrl}>Edit Beer</Link>
        <h4 onClick={this.handleDelete} className="delete">Delete Beer</h4>
      </div>;
    }
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
                  <p onClick={this.handlePlus} data-tip="Checkin This Beer"
                    className="beer-plus-img">+</p>
                  <ReactTooltip type="warning" place="top" />
                </div>
              </div>
              <p className="beer-style">{this.props.beer.style}</p>
              <p className="beer-description">{this.props.beer.description}</p>
            </div>
          </div>

          <div className="bottom-beer-show">
            <div className="beer-abv-ibu">
              <p className='beer-abv'> ABV: {this.props.beer.abv}</p>
              <p className='beer-ibu'> IBU: {this.props.beer.ibu}</p>
            </div>
            {editInfo}
          </div>
        </div>
      </li>
    );
  }
}


export default BeerIndexItem;
