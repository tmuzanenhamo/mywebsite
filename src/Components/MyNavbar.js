import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);


class MyNavbar extends Component {
  render() {
    return (

 <div className="container">
<nav className="navbar navbar-expand-lg fixed-top navbar-light">
  <Link className="navbar-brand blog-p" to="/">Tawanda</Link>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link blog-p" to="/"> Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link blog-p" to="/About">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link blog-p" to="/Resume">Resume</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link blog-p" to="/Blog">Blog</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link blog-p" to="/Projects">Projects</Link>
      </li>
     
    </ul>
  </div>
</nav>

</div>
    );
  }
}

export default MyNavbar;
