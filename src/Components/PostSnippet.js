import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import image3 from '../Images/Me.jpg';

const PostSnippet = props => {
    const data = props.author.profile_image;
  return (
    <div className="post-snippet">
      <h3> 
      <Link to={{
          pathname: `/blog/${props.slug}`,
          state: props
        }}>
          {props.title} </Link></h3>

          <img src ={data} alt=""/>
      <p>{props.summary}</p>
      <div>
        <div>By <strong>{props.author.first_name} {props.author.last_name}</strong></div>
        
        <span className="publication-date">
          Published on 
          {' '}
          {moment(props.published).format("YYYY-MM-DD")}
        </span>
      </div>
    </div>
  );
}

export default PostSnippet;