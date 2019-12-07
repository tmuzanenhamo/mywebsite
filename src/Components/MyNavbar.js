import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class MyNavbar extends Component {
  render() {
    return (

<nav class="navbar navbar-expand-md navbar-light bg-light">
    <Link to="/" class="navbar-brand">Tawanda</Link>
    
        <div class="navbar-nav ml-auto">
            <Link to="/" class="nav-item nav-link active">Home</Link>
            <Link to="/About" class="nav-item nav-link">About</Link>
            <Link to="/Blog" class="nav-item nav-link">Blog</Link>
            <Link to="/Projects" class="nav-item nav-link " tabindex="-1">Projects</Link>
            <Link to="/Contact" class="nav-item nav-link " tabindex="-1">Contact</Link>
        </div>
</nav>


    );
  }
}

export default MyNavbar;
