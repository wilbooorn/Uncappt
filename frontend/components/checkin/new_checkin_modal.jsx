import React from 'react';
import UploadButton from '../upload_button';

class NewCheckinModal extends React.Component {
  constructor(props){
    super(props);
    this.state={review:"", rating:"", location:"", image_url: "",
    beer_id:this.props.match.params.beerId, user_id:this.props.currentUser.id};

    this.review = this.review.bind(this);
    this.location = this.location.bind(this);
    this.rating = this.rating.bind(this);
    this.postImage = this.postImage.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.requestOneBeer(this.props.match.params.beerId);
    if(this.props.match.params.checkinId){
      this.props.fetchOneCheckin(this.props.match.params.checkinId);
      this.text = "Update Checkin";
      this.photoText = "Edit Photo";
    }
    else{
      this.text = "Checkin";
      this.photoText = "Add Photo";
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.checkin.id){
      this.setState({
        review:nextProps.checkin.review,
        rating:nextProps.checkin.rating,
        location:nextProps.checkin.location,
        image_url:nextProps.checkin.image_url,
        beer_id: nextProps.checkin.beer_id
      });
    }
  }

  handleCancel(e){
    e.preventDefault();
    this.props.history.push("/home");
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.match.params.beerId){
      this.props.createNewCheckin(this.state).then(() => {
        this.props.history.push("/home");
      });
    }
    else{
      let url = `/checkins/${this.props.checkin.id}`;
      this.setState({id: this.props.checkin.id}, () => {
        this.props.updateCheckin(this.state).then(() => {
          this.props.history.push(url);
        });
      });
    }
  }

  review(e){
    e.preventDefault();
    let review = document.getElementById("checkin-review").value;
    this.setState({review});
  }

  location(e){
    e.preventDefault();
    let location = document.getElementById("checkin-location").value;
    this.setState({location});
  }

  rating(e){
    e.preventDefault();
    let rating = document.getElementById("checkin-rating").value;
    this.setState({rating});
  }

  postImage(url){
    let img = {url};
    $.ajax({
      method: "POST",
      url: "/api/images",
      data: {image: img},
      success: (image) => {
        this.setState({ image_url: image.url });
      }
    });
  }

  render(){
    console.log(this.props.errors);
    let image = <div></div>;
    if (this.state.image_url !== ""){
      image = <img className="new-checkin-image" src={this.state.image_url} />;
    }

    let text;
    if (this.props.beer){
      text = `Checkin for ${this.props.beer.name}.`;
    }
    return (
      <div className="new-checkin-container">
        <form className="checkin-form">
          <h1 className="new-checkin-title">UNCAPP'T</h1>
          <h3 className="checkin-text">{text}</h3>
          <p className="errors">{this.props.errors}</p>
          <input id="checkin-review" type="text"
            value={this.state.review} onChange={this.review}
            placeholder=" What did you think?" />

          <h2 className="checkin-rating-title">Rating</h2>
          <select id="checkin-rating" value={this.state.rating}
            onChange={this.rating}>
              <option selected disabled>Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

          <input type="text" id="checkin-location"
            value={this.state.location} onChange={this.location}
            placeholder="Where'd you try it?" />

          <div className="new-beer-image-container">
            <UploadButton postImage={this.postImage} text={this.photoText}/>
            {image}
          </div>

          <div className = "new-checkin-buttons">
            <button onClick={this.handleSubmit}
              className="new-checkin-button">{this.text}</button>

            <button onClick={this.handleCancel}
              className="cancel-checkin-button">Cancel</button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewCheckinModal;
