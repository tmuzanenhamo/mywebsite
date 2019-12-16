import React, { Component } from 'react';
import '../App.css';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
class Resume extends Component {
  render() {
    return (
      <div className ='container'>
          <h1 className='heading-1'>RESUME</h1>
          <p>EDUCATION EXPERIENCE SKILLS</p>
          <div className ="row">
            <div className= 'col-md-6'>
          <Education/>
          
          </div>
          <div className = 'col-md-6'>
            <Experience/>
          </div>
          </div>

      
        
      </div>
    );
  }
}

export default  Resume;
