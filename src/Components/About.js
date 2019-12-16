import React from "react";
import myFace from '../Images/image22.jpg'
import '../App.css';
import aboutData from '../data/Data.json';


const About = () => {
return (
  <div class="wine-row">
    <img src={myFace} alt=""></img>
    <div class="wine-text-container">
    {aboutData.map((data)=> {
        return (
        <div>
        <h1 className ='heading'>{data.name}</h1>
        <br></br>
        <p className ="p">{data.bio} </p>
        </div>
            )
          }
       )
    }     
    </div>
</div>

);
}

export default About;