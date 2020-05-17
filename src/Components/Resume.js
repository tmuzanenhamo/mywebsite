import React, { Component } from 'react';
import '../App.css';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import categories from '../data/categories';
import skills from '../data/skills';
import ReactGA from 'react-ga';
import Skills from './Pages/Skills';

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);
class Resume extends Component {
  render() {
    return (
      <div className ='container'>
          <h1 className='heading-1'>RESUME</h1>
          <hr/>
          <p className ='blog-p'>EDUCATION | EXPERIENCE | SKILLS</p>
          <div className ="row">
            <div className= 'col-md-6'>
          <Education/>            
          </div>
          <div className = 'col-md-6'>
            <Experience/>
          </div>
          </div>
          <Skills skills={skills} categories={categories} /> 
      </div>
    );
  }
}

export default  Resume;
