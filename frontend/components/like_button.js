import React from 'react';

class LikeButton extends React.Component {
  constructor(props){
    super(props);

    this.unlike = this.unlike.bind(this);
    this.like = this.like.bind(this);
    let usersWhoLike = this.props.checkin.user_likes.map(user => user.username);
    this.state = {liked: usersWhoLike.includes(this.props.user.username)};
  }

  unlike(e){
    e.preventDefault();
    this.setState({liked: false});
    this.props.deleteLike({user_id: this.props.user.id,
                          checkin_id: this.props.checkin.id});
  }

  like(e){
    e.preventDefault();
    this.setState({liked: true});
    this.props.createLike({user_id: this.props.user.id,
                          checkin_id: this.props.checkin.id});
  }

  render(){
    if(this.state.liked){
      return <button className="liked-cheers-button"
              onClick={this.unlike}>Uncheers <i className="fa fa-beer"></i></button>;
    }
    else{
      return(
        <button className="unliked-cheers-button"
                onClick={this.like}>Cheers <i className="fa fa-beer"></i></button>
      );
    }
  }
}

export default LikeButton;
