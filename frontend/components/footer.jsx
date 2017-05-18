import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <footer className = "footer">
        <Link to="/home">Home</Link>
        <a href = "https://github.com/wilbooorn">About</a>
        <a href = "https://www.linkedin.com/in/rwilborn/">Careers</a>
        <p>&copy; 2017 UNCAPP'T</p>
      </footer>
    );
  }
}

export default Footer;
