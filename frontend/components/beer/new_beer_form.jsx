import React from 'react';
import NavBarContainer from '../nav_bar_container';
import UploadButton from '../upload_button';

class NewBeerForm extends React.Component {
  constructor(props){
    super(props);
    this.state={name: "", description:"", brewery:"", abv:"", ibu:"",
                style:"", image_url:""};

    this.postImage = this.postImage.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBrewery = this.handleBrewery.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleIBU = this.handleIBU.bind(this);
    this.handleABV = this.handleABV.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.match.params.beerId){
      this.props.requestOneBeer(this.props.match.params.beerId);
      this.text = "Update Beer";
    }
    else{
      this.text = "Create Beer";
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(nextProps.beer.name){
      this.setState({
        name:nextProps.beer.name,
        brewery:nextProps.beer.brewery,
        description:nextProps.beer.description,
        style:nextProps.beer.style,
        abv:nextProps.beer.abv,
        ibu:nextProps.beer.ibu,
        image_url:nextProps.beer.image_url,

      });
    }
  }

  handleCancel(e){
    e.preventDefault();
    this.props.history.push("/beers");
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.match.params.beerId){
      this.setState({id: this.props.match.params.beerId}, ()=>{
        this.props.updateBeer(this.state);
        this.props.history.push(`/beers/${this.props.match.params.beerId}`);
      });
    }
    else if(this.state.image_url === ""){
        this.setState({image_url: "http://res.cloudinary.com/dslok1mwv/image/upload/v1495061245/bkwvbdxkybjgwtw0zplp.png"}, ()=> {
          this.props.createNewBeer(this.state);
          this.props.history.push("/beers");
        });
    }else{
      this.props.createNewBeer(this.state);
      this.props.history.push("/beers");
    }
  }

  handleName(e){
    e.preventDefault();
    let name = document.getElementById("new-beer-name").value;
    this.setState({name});
  }

  handleBrewery(e){
    e.preventDefault();
    let brewery = document.getElementById("new-beer-brewery").value;
    this.setState({brewery});
  }

  handleDescription(e){
    e.preventDefault();
    let description = document.getElementById("new-beer-description").value;
    this.setState({description});
  }

  handleStyle(e){
    e.preventDefault();
    let style = document.getElementById("new-beer-style").value;
    this.setState({style});
  }

  handleIBU(e){
    e.preventDefault();
    let ibu = document.getElementById("new-beer-ibu").value;
    this.setState({ibu});
  }

  handleABV(e){
    e.preventDefault();
    let abv = document.getElementById("new-beer-abv").value;
    this.setState({abv});
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
            <h3 className="errors">{this.props.errors.join(", ")}</h3>

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
              <UploadButton postImage={this.postImage} text={"Add Photo of Beer"}/>
              {image}
            </div>

            <div className = "new-beer-buttons">
              <button onClick={this.handleSubmit}
                className="new-beer-button">{this.text}</button>

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
