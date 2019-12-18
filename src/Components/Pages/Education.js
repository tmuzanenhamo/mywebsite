import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EDUCATION from '../../data/EDUCATION';
import '../../App.css';
import contact from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const validateText = (text) => {
    // NOTE: Passes RFC 5322 but not tested on google's standard.
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
  };


const messages = [
    'references are available on request',
    ' Get intouch with me',
    'or contact me via my social media accounts below ',
    'or check out some of my skills below',  
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

function Education() {

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
    <div className ='etitle'>
        <div className = 'link-to' id= 'education'>
            <div className = 'etitle'>
                <h3 className = 'headers'>Education</h3>
            </div>
            {EDUCATION.map((data)=> {
                return (
                    <div>
                    <ul className ='timeline'>
                    <li>
                        <h4 className="degree">{data.degree}</h4>
                        <p className="school"><a href={data.link}>{data.school}</a>, {data.year}<br/>
                         {data.grade} - {data.score}
                        </p>
                    </li>
                    </ul>
                    </div>
                    )
                }
            )
            } 

    <div
          className="inline-container"
          style={validateText(message) ? {} : { color: 'red' }}
          onMouseEnter={() => setIsActive(false)}
          onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
        >

        <a href={validateText(message) ? `mailto:${message}@tmuzanenhamo14@gmail.com` : ''}>
              <span>{message}</span>
              <span> @tmuzanenhamo14@gmail.com</span>
            </a>

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
export default Education;
