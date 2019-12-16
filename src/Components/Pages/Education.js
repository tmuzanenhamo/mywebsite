import React from 'react';
import PropTypes from 'prop-types';
import EDUCATION from '../../data/EDUCATION';
import '../../App.css';

function Education() {
  return (
    <div className ='etitle'>
        <div className = 'link-to' id= 'education'>
            <div className = 'etitle'>
                <h3 className = 'headers'>Education</h3>
            </div>
            {EDUCATION.map((data)=> {
                return (
                    <ul className ='timeline'>
                    <li>
                        <h4 className="degree">{data.degree}</h4>
                        <p className="school"><a href={data.link}>{data.school}</a>, {data.year}<br/>
                         {data.grade} - {data.score}
                        </p>
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
export default Education;
