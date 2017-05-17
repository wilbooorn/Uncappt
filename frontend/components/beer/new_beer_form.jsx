import React from 'react';
import NavBarContainer from '../nav_bar_container';
import UploadButton from '../upload_button';

class NewBeerForm extends React.Component {
  constructor(props){
    super(props);
    this.state={name: "", description:"", brewery:"", abv:null, ibu:null,
                style:"", image_url:""};

    this.postImage = this.postImage.bind(this);
  }

  postImage(url){
    let img = {url};
    $.ajax({
      method: "POST",
      url: "/api/images",
      data: {image: img},
      success: (image) => {
        console.log("success");
        this.setState({ image_url: image.url });
      }
    });
  }

  render(){
    let image = <div></div>;
    if (this.state.image_url !== ""){
      image = <img className="new-beer-image" src={this.state.image_url} />;
    }
    return (
      <div>
        <NavBarContainer history={this.props.history} />
        <div className="new-beer-form-container">
          <form className="new-beer-form">
            <h1 className="new-beer-title">UNCAPP'T</h1>
            <h1 className="new-beer-message">Add a New Beer!</h1>
            <h3 className="errors">{this.props.errors}</h3>

            <div className="new-beer-name-brewery">
              <input type="text" id="new-beer-name"
                value={this.state.name}
                onChange={this.handleName}
                placeholder="beer name">
              </input>

              <input type="text" id="new-beer-brewery"
                value={this.state.brewery}
                onChange={this.handleBrewery}
                placeholder="brewery">
              </input>
            </div>

            <textarea id="new-beer-description"
              onChange={this.handleDescription}
              placeholder="description"
              value={this.state.description} />

            <div className="new-beer-info">
              <input type="text" id="new-beer-style"
                value={this.state.style}
                onChange={this.handleStyle}
                placeholder="style (IPA, Blonde, etc.)">
              </input>

              <input type="text" id="new-beer-abv"
                value={this.state.abv}
                onChange={this.handleABV}
                placeholder="abv (5.6)">
              </input>

              <input type="text" id="new-beer-ibu"
                value={this.state.ibu}
                onChange={this.handleIBU}
                placeholder="ibu (70)">
              </input>
            </div>

            <div className="new-beer-image-container">
              <UploadButton postImage={this.postImage} text="Add Photo of Beer"/>
              {image}
            </div>

              <div className = "new-beer-buttons">
              <button onClick={this.handleSubmit}
                className="new-beer-button">Create Beer</button>

              <button onClick={this.handleCancel}
                className="cancel-beer-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeerForm;
