import React from 'react';
import '../App.css';
import dayjs from 'dayjs';
import projects from '../data/projects';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);



const Projects = () => {

   
    return (
        <div className='container'>
        <div className="proj-head">
            <h1 className="proj-text blog-p"> PROJECTS </h1>
            
            <p className = 'blog-p'>This page is a collection of projects I've taken on over the years, some of which are still ongoing. Some are closely related to my university courses, and others are purely for my own interest and enjoyment.</p>
        <div className="cell-container">
            <article className="mini-post">
        {projects.map((data)=> {
            return (
                <div>
                    <hr/>
                  <header>
                    <h3 className ="projects"><a href={data.link}>{data.title}</a></h3>
                    <time className="published">{dayjs(data.date).format('MMMM, YYYY',)}</time>
                  </header>
                  
                  <a href={data.link} className="image"><img className = "col-xs-12 col-sm-6 col-md-6" key = {data.id} src={data.image} alt="" /></a>
                  <div className="description">
                  <p className='blog-p'>{data.description}</p>
                  </div>
                </div>
                
              
                )
            }
        )
        }  
        </article>
         </div> 
         </div>  
         </div>
    );

}
export default  Projects;
