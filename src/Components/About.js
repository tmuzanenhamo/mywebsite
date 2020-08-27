import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import myFace from '../Images/latest.PNG';
import contact from '../data/contact';
import aboutData from '../data/Data.json';
import '../App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const About = () => {
return (
  <div class='some-page-wrapper'>
  <div class='rows'>
    <div class='columns'>
      <div class=''>
        <img className='' src={myFace} alt=''/>
      </div>
    </div>
    <div class='columns'>
      <div class=''>
      {aboutData.map((data)=> {
          return (
          <div>
          <h1 className ='parag'>{data.name}</h1>
          <p className = 'intro'>{data.intro}</p>
          <hr/>
          <p id="parag">{data.bio}</p>

          </div>
              )
            }
        )
        } 
      </div>
      <Button id="buttons" ><Link to="/Resume">Contact Me</Link></Button>
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