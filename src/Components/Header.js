import React, { Component } from 'react';
import image3 from '../Images/image3.jpg';
import '../App.css';
import landingData from '../data/Data.json';



export default class Header extends Component {
  render() {
    
    return (

      <div class = 'card' >  
      <img src= {image3} alt="Logo"/>
      <div class="card-body">
      <div class="centered">

        {landingData.map((details)=> {

          return <h1> Hi I'm {details.name}</h1>
        })}
        <p>I'm an Electrical and Computer Engineering student from the renowned University of Cape Town </p>

      </div>

      </div>
      
      </div>
     
    );
  }
}
