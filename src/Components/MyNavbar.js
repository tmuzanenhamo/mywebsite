import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class MyNavbar extends Component {
  render() {
    return (

 <div class="container">
<nav class="navbar navbar-expand-lg fixed-top navbar-light">
  <Link class="navbar-brand" to="/">Tawanda</Link>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/"> Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Blog">Blog</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Projects">Projects</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

</div>
    );
  }
}

export default MyNavbar;
