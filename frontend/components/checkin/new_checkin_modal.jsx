import React from 'react';

class NewCheckinModal extends React.Component {
  constructor(props){
    super(props);
    this.state={comment:"", rating:0, location:"", image_url: "",
    beer_id:this.props.match.params.beerId, user_id:this.props.currentUser.id};

    this.comment = this.comment.bind(this);
  }

  comment(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="new-checkin-container">
        <form>
          <input id="checkin-comment" type="text"
            value={this.state.comment} onChange={this.comment} />

          <input></input>
        </form>
      </div>
    );
  }
}

export default NewCheckinModal;
