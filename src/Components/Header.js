import React, { useState, useEffect, useRef } from 'react';
import image3 from '../Images/image3.jpg';
import '../App.css';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import contact from '../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};


const messages = [
  'Telecommunications',
  'Software Development ',
  'Data Science',
  'Internet of Things',
  'Embedded Engineering', 
  'Electrical Engineering',
  'Electronics Engineering',
  'Web Development',

];
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

function Header() {

  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);
    
    return (

      <div className = '' id="showcase" >  
      <div className="card-body">
      <div className="centered">
        <div className='new-header'>
        <h1 className = 'catchy-tag'>Aim for the STARS</h1>
        <p className ='header-p'>Hello and welcome to my ePortfolio. My name is Tawanda Muzanenhamo, i am a final year Elctrical and Computer Engineering student at the University of Cape Town</p>
        <div
          className="inline-container"
          style={validateText(message) ? {} : { color: 'white' }}
          onMouseEnter={() => setIsActive(false)}
          onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
        >
          <p className = 'header-a'><a className ='header-a' href={validateText(message) ? `mailto:${message}@tmuzanenhamo14@gmail.com` : ''}>
          <span className='header-a'>My areas of interest include: </span>
          <span>{message}</span>
              
            </a>
           </p>
           <p><Link id = "button" to="/About">Read More</Link></p>
           <br/>
           <ul className="icons">
          {contact.map(s => (
            <i className="i" key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></i>
          ))}
        </ul>
        </div>
        </div>
      </div>

      </div>
      
      </div>
     
    );

}

export default Header;
