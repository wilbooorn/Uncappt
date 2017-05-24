import React from 'react';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';
import CheckinIndexContainer from '../checkin/checkin_index_container';
import UploadButton from '../upload_button';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

    this.postImage = this.postImage.bind(this);
  }

  componentWillMount(){
    this.props.fetchOneUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchOneUser(newProps.match.params.userId);
    }
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  postImage(url){
    let img = {url};
    $.ajax({
      method: "POST",
      url: "/api/images",
      data: {image: img},
      success: (image) => {
        this.props.updateUser({ id: this.props.currentUser.id,
          image_url: image.url});
      }
    });
  }

  render(){
    let upload = <div></div>;
    if(this.props.user.id === this.props.currentUser.id){
      upload = <UploadButton postImage={this.postImage}
        text="Upload Photo" className="profile-upload-button" />;
    }

    if(this.props.user.id){
      return (
        <div>
          <NavBarContainer history={this.props.history} />
          <div className="user-profile-container">
            <div className="user-info-container">
              <div className="user-profile-image">
                <img src={this.props.user.image_url} />
                {upload}
              </div>
              <div className="user-info">
                <h1>{this.props.user.username}</h1>
                <div className="user-stats">
                  <div className="checkin-count">
                    <h3>Checkins:</h3>
                    <h3>{this.props.user.checkins.length}</h3>
                  </div>

                  <div className="where-you-drinking">
                    <p>Drinking in</p>
                    <p>{this.props.user.location ? this.props.user.location : " a cool place."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CheckinIndexContainer beerCheckins={this.props.user.checkins} history={this.props.history} />
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div></div>
      );
    }
  }

}

export default UserProfile;
