import React from "react";
import myFace from '../Images/image22.jpg'
import '../App.css';
import aboutData from '../data/Data.json';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const About = () => {
return (
  <div class='some-page-wrapper'>
  <div class='rows'>
    <div class='columns'>
      <div class=''>
        <img src={myFace} alt=''/>
      </div>
    </div>
    <div class='columns'>
      <div class=''>
      {aboutData.map((data)=> {
          return (
          <div>
          <h1 className ='parag'>{data.name}</h1>
          <br></br>
          <p className ="para">{data.bio} </p>
          </div>
              )
            }
        )
        } 
      </div>
      <Button variant="outline-secondary"><Link to="/Resume">Contact Me</Link></Button>
    </div>
  </div>
</div>
      
);
}

export default About;