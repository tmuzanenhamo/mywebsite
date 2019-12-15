import React, { Component } from 'react';
import projects from "../data/projects.json";
import dayjs from 'dayjs';
import '../App.css';

class Proj extends Component {
	render() {
		return (
            <div className="proj-head">
            <h1 className="proj-text"> Projects </h1>
            <p>THIS IS A SELECTION OF SOME OF MY PROJECTS</p>
                <div className="cell-container">
            <article className="mini-post">
            
                {
                  projects.map((data) => {
                    return (
                        <div>
                        <header>
                          <h3 className ="projects"><a href={data.link}>{data.title}</a></h3>
                          <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
                        </header>
                        
                        <a href={data.link} className="image"><img src={require('../Images' + data.image)} alt={data.title} /></a>
                        <div className="description">
                        <p>{data.description}</p>
                        </div>
                      </div>
                    );
                  })
                } 

            </article>
         </div> 
         </div>  
           
        );
    }
} 
export default Proj;