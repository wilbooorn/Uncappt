import React from 'react';
import {Link} from 'react-router-dom';

class CheckinIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.calculateRating = this.calculateRating.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
  }

  calculateRating(rating){
    if(rating === 1){
      return <div className = 'checkin-rating'>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
      </div>;
    }else if (rating === 2){
      return <div className = 'checkin-rating'>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
      </div>;
    }
    else if (rating === 3){
      return <div className = 'checkin-rating'>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
      </div>;
    }
    else if (rating === 4){
      return <div className = 'checkin-rating'>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495214139/bkwvbdxkybjgwtw0zplp.png"/>
      </div>;
    }
    else{
      return <div className = 'checkin-rating'>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/v1495081955/a9qv6gnvuj4frwa4gahv.png"/>
      </div>;
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
        <h4 onClick={this.handleDelete} className="dcheckin-elete">Delete Delete</h4>
      </div>;
    }

    let beerUrl = `/beers/${this.props.checkin.beer.id}`;
    return(
      <li className = "checkin-show-container">
        <div className = 'checkin-pic-info'>
          <div className="user-profile-img">
            <img className="user-pic" src={this.props.checkin.user.image_url} />
          </div>

          <div className="checkin-info-review">

            <div className='checkin-info'>
              <p>{this.props.checkin.user.username}</p>
              <p>is drinking a </p>
              <Link to={beerUrl}>{this.props.checkin.beer.name}</Link>
              <p> by </p>
              <p>{this.props.checkin.beer.brewery}</p>
              <p>at</p>
              <p>{this.props.checkin.location}</p>
            </div>

            <div className="checkin-review">
              <p>{this.props.checkin.review}</p>
              {this.calculateRating(this.props.checkin.rating)}
            </div>

            <div className='checkin-img-container'>
              <img className="checkin-img" src={this.props.checkin.image_url} alt="checkin image" />
            </div>

          </div>

        </div>
        {viewEditCheckin}
      </li>
    );
  }
}

export default CheckinIndexItem;
