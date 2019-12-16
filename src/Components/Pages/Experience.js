import React from 'react';
import experience from '../../data/experience';
import '../../App.css'

 function Experience() {
  return (
    <div className ='etitle'>
        <div className = 'link-to' id= 'education'>
            <div className = 'etitle'>
                <h3 className= 'headers'>Experience</h3>
            </div>
            {experience.map((data)=> {
                return (
                    <ul className ='timeline'>
                    <li>
                <h4 className="degree"><a href ={data.link}>{data.company} </a>-{data.position}</h4>
                <p className="daterange"> {data.daterange}</p>
                <ul className="points">
                  {data.points.map(point => (
                    <li key={point}>{point}</li>
                ))}
                </ul>       
                    </li>
                    </ul>
                    )
                }
            )
            } 
        </div>
    </div>
  );
}
export default Experience;