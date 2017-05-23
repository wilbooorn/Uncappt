import React from 'react';
import {Link} from 'react-router-dom';
import Rating from 'react-rating';

class CheckinIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.calculateRating = this.calculateRating.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    if (confirm("Are you sure you want to delete this checkin?")){
      this.props.deleteCheckin(this.props.checkin.id).then(() =>{
        this.props.history.push("/home");
      });
    }
  }

  render(){
    let viewEditCheckin = <div></div>;
    if (!this.props.path){
      let viewUrl = `/checkins/${this.props.checkin.id}`;
      viewEditCheckin = <div>
        <Link className="view-checkin" to={viewUrl}>View Checkin</Link>
        </div>;
    }
    else if(this.props.currentUser.id === this.props.checkin.user.id){
      let editUrl = `/checkins/${this.props.checkin.id}/edit`;
      viewEditCheckin = <div className="edit-delete-checkin">
        <Link className="edit-checkin" to={editUrl}>Edit Checkin</Link>
        <h4 onClick={this.handleDelete} className="checkin-delete">Delete Checkin</h4>
      </div>;
    }
    let beerUrl = `/beers/${this.props.checkin.beer.id}`;
    let userUrl = `/users/${this.props.checkin.user.id}`;
    return(
      <li className = "checkin-show-container">
        <div className = 'checkin-pic-info'>
          <div className="user-profile-img">
            <img className="user-pic" src={this.props.checkin.user.image_url} />
          </div>

          <div className="checkin-info-review">

            <div className='checkin-info'>
              <Link to={userUrl}>{this.props.checkin.user.username}</Link>
              <p>is drinking a </p>
              <Link to={beerUrl}>{this.props.checkin.beer.name}</Link>
              <p> by </p>
              <p>{this.props.checkin.beer.brewery}</p>
              <p>at</p>
              <p>{this.props.checkin.location}</p>
            </div>

            <div className="checkin-review">
              <p>{this.props.checkin.review}</p>
                <Rating initialRate={this.props.checkin.rating} className="checkin-rating" readonly
                  empty={<img src="http://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png" className="black-beer-show"/>}
                  full={<img src="http://res.cloudinary.com/dslok1mwv/image/upload/v1495123297/udsqkscggkcla3h2aqhf.png" className="gold-beer-show"/>}
                />
            </div>

            <div className='checkin-img-container'>
              <img className="checkin-img" src={this.props.checkin.image_url} />
            </div>

          </div>

        </div>
        {viewEditCheckin}
      </li>
    );
  }
}

export default CheckinIndexItem;
