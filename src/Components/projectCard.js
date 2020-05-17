import React from 'react'
import "semantic-ui-css/semantic.min.css";

const ProjectCard = ({title, date, link, image, description, id}) => {
    return (
        <div className="card"> 
            <div className= "image">
                <img src = {image} alt='' className = "col-xs-12 col-sm-6 col-md-6"></img>
                <div className ='overlay'>
                <div class="text">Hello World</div> 
                </div>
            </div>
            <div className="content">
                <div className="header">
                    {title}
                </div>
                <div className="description">
                        <p>{description}</p>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">
                    Code
                </button>
                <button className="ui button">
                    Demo
                </button>
            </div>
        </div>
    )
}
export default ProjectCard; 