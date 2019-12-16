import React, { useState, useEffect, useRef } from 'react';
import image3 from '../Images/image3.jpg';
import '../App.css';
import landingData from '../data/Data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};


const messages = [
  'Artificial Intelligence',
  'Telecommunications',
  'Software Development ',
  'Internet of Things',
  'Embedded Engineering', 
  'Electrical Engineering',
  'Hardware Programming',
  'Algorithm Design',
  'Electronics Engineering',
  'Cloud Computing',
  'Web Development'
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

      <div class = 'card' >  
      <img src= {image3} alt="Logo"/>
      <div class="card-body">
      <div class="centered">

        {landingData.map((details)=> {

          return <h1 className = 'header-a'> {details.greeting} {details.name}</h1>
        })}
        <p className ='header-a'>I'm an Electrical and Computer Engineering student from the renowned University of Cape Town<br/> 
        </p>
        <div
          className="inline-container"
          style={validateText(message) ? {} : { color: 'white' }}
          onMouseEnter={() => setIsActive(false)}
          onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
        >

        <p className = 'header-a'><a className ='header-a' href={validateText(message) ? `mailto:${message}@tmuzanenhamo14@gmail.com` : ''}>
        <span className='header-a'>My Areas of Interest includes: </span>
              <span>{message}</span>
              
            </a>
           </p>
        </div>
      </div>

      </div>
      
      </div>
     
    );

}

export default Header;
