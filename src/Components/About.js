import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import myFace from '../Images/image22.jpg';
import contact from '../data/contact';
import aboutData from '../data/Data.json';
import Resume from './Resume';
import '../App.css';

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
      <ul className="icons">
          {contact.map(s => (
            <i className="i" key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></i>
          ))}
        </ul>
    </div>
  </div>
</div>
      
);
}

export default About;