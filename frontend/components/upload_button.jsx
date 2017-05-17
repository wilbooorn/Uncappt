import React from "react";

class UploadButton extends React.Component{

  constructor(props){
    super(props);

    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.props.postImage(results[0].url);
      }
    });
  }

  render() {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
}

export default UploadButton;
