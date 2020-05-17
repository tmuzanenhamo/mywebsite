import React from 'react';
import '../App.css';
import dayjs from 'dayjs';
import projects from '../data/projects';
import ReactGA from 'react-ga';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);



const Projects = () => {

    const formatData = (data) => {

            let fData = [];
            let j = 0;
            while (j < data.length){
                let row = [];
                for (let i = j; i < j+3 ;i++){
                    if (i < data.length){
                    row.push(data[i])
                        }
                }
                j = j+3;
                fData.push(row);       
            }
            
            return fData;
                
            }
    
      let fdata = formatData(projects)
    //   console.log(fdata)      
   
    return (
        <div className='container'>
        <div className="proj-head">
            <h1 className="proj-text blog-p"> PROJECTS </h1>
            
            <p className = 'blog-p'>This page is a collection of projects I've taken on over the years, some of which are still ongoing. Some are closely related to my university courses, and others are purely for my own interest and enjoyment.</p>
        <div className="">
            <article className="mini-post">
           
        {fdata.map((data, index)=> {
            return (
                <div className= 'row' key = {index}>
                    {data.map((project, index) => {
                        return(
                            <div className='col-md-4' key ={index}>
                            <hr/>
                            <header>
                              <h3 className ="projects"><a href={project.link}>{project.title}</a></h3>
                              <time className="published">{dayjs(project.date).format('MMMM, YYYY',)}</time>
                            </header> 
                            <a href={data.link} className="image"><img className = "col-xs-12 col-sm-6 col-md-6" key = {project.id} src={project.image} alt="" /></a>
                            <div className="description" key ={index}>
                            <p className='blog-p'>{project.description}</p>
                            </div>
                          </div>
                        )



                    })}
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
