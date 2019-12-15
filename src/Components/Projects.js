import React from 'react';
import '../App.css';
import dayjs from 'dayjs';
import projects from '../data/projects';



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
                  
                  <a href={data.link} className="image"><img className = "col-xs-12 col-sm-6 col-md-6" key = {data.id} src={data.image} alt="" /></a>
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
