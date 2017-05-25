import React from 'react';

class LikeButton extends React.Component {
  constructor(props){
    super(props);

    this.unlike = this.unlike.bind(this);
    this.like = this.like.bind(this);
  }

  unlike(e){
    e.preventDefault();
    this.props.deleteLike({user_id: this.props.user.id,
                          checkin_id: this.props.checkin.id});
  }

  like(e){
    e.preventDefault();
    this.props.createLike({user_id: this.props.user.id,
                          checkin_id: this.props.checkin.id});
  }

  render(){
    let usersWhoLike = this.props.checkin.user_likes.map(user => user.username);
    if(usersWhoLike.includes(this.props.user.username)){
      return <button className="liked-cheers-button"
              onClick={this.unlike}>Uncheers</button>;
    }
    else{
      return(
        <button className="unliked-cheers-button"
                onClick={this.like}>Cheers</button>
      );
    }
  }
}

export default LikeButton;
