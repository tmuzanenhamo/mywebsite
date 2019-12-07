import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class MyNavbar extends Component {
  render() {
    return (
      <nav  className="navbar navbar-expand-sm navbar-light mb-3 py-0 fixed-top">
        <div className ="container">
        <Link className ="navbar-brand" to="/">Tawanda</Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className= "nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className= "nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
              <Link className= "nav-link" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
              <Link className= "nav-link" to="/Projects">Projects</Link>
              </li>
              <li className="nav-item">
              <Link className= "nav-link" to="/Contact">Contact</Link>
              </li>
          </ul>
        </div>
        </div>
      </nav>


    );
  }
}

export default MyNavbar;
