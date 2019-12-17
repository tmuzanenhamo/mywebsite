import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import contact from '../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);




const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'you can contact me about anything',
  'reach out to me via email on ',
  'or contact me via my social media accounts below ', 
  'or fill in your details and message on the form and i will get back to you'
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




 const Contact =()=> {

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

  
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");




  

  const handleFirstNameChange = (e) => {
    setFirstName(e.currentTarget.value);
    validateFirstName(e.currentTarget.value);
  };

  const validateFirstName = (value) => {
    const error = value ? "" : "You must enter your first name";
    setFirstNameError(error);
    return error;
  };

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.currentTarget.value);
    validateEmailAddress(e.currentTarget.value);
  };

  const validateEmailAddress = (value) => {
    const error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? ""
      : "You must enter a valid email address";
    setEmailAddressError(error);
    return error;
  };

  const handleClick = (e) => {
    console.log('this button was clicked');
    e.preventDefault();
    

  }

  
  return (

    <div className="contact">
    <div className="container ">
      <div style ={{textAlign: "center"}}>
            <h3 className ="contact-h3">Contact Me</h3>
      </div>

      <div className= "row">

        <div className = "column">
        <p>I'm open to questions, collaborations and advice.</p>

        <div
          className="inline-container"
          style={validateText(message) ? {} : { color: 'red' }}
          onMouseEnter={() => setIsActive(false)}
          onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
        
        >

        <a href={validateText(message) ? `mailto:${message}@tmuzanenhamo14@gmail.com` : ''}>
              <span>{message}</span>
              <span>@tmuzanenhamo14@gmail.com</span>
            </a>

            <ul className="icons">
          {contact.map(s => (
            <i className="i" key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></i>
          ))}
        </ul>
        </div>

        <p> </p>

        </div>
        <div className="column">
        <div className="row fN">
            <label htmlFor="firstName" className = 'first'>First name</label>
            <input id="firstName" value={firstName} onChange={handleFirstNameChange} />
            <span className="error"></span>
          </div>
          
          <div className="row fN">
            <label htmlFor="emailAddress" className = 'first1'>Email address</label>
            <input  id="emailAddress" value={emailAddress} onChange={handleEmailAddressChange} />
            <span className="error"></span>
        </div>

        <div className ='row f'>
          <label htmlFor='subject' className= "mess">Message</label>
          <textarea className = 'mE' id='subject'  name="subject" placeholder="Write something.." style={{height: '100px' }}></textarea>
        </div>
        <div className= "row but">

        <Button  onClick = {handleClick} variant="primary" type="submit" className="but">
              Submit
            </Button>
        </div>

        </div>
      </div>


    </div>
    </div>
  );
}


export default Contact;
