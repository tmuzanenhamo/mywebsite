import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import VS from "../Images/Virtual Assistant.jpg";
import projects from '../data/projects';
var images = require.context('../Images', true);


const Projects = () => {

   
    return (
        <div className="proj-head">
            <h1 className="proj-text"> Projects </h1>
            <p>THIS IS A SELECTION OF SOME OF MY PROJECTS</p>
        <div className="cell-container">
            <article className="mini-post">
        {projects.map((data)=> {
            return (
                <div>
                  <header>
                    <h3 className ="projects"><a href={data.link}>{data.title}</a></h3>
                    <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
                  </header>
                  
                  <a href={data.link} className="image"><img key = {data.id} src={data.image} alt="" /></a>
                  <div className="description">
                  <p>{data.description}</p>
                  </div>
                </div>
                
              
                )
            }
        )
        }  
        </article>
         </div> 
         </div>  
    );

}
export default  Projects;
