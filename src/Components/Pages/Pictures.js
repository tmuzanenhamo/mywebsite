import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css'

function Pictures(source, alt, deployed, github, ) {
  return (
    <div className = 'picContainer'>
        <img src={source} alt={alt} className="image image-fluid" />
        <div className="overlay">
      <div className={(deployed && github) ? 'text textWithDeployed' : 'text'}>
        {github ? <a href={github} target="_blank" rel="noopener noreferrer">Github</a> : ''}
        {deployed ? <a href={deployed} target="_blank" rel="noopener noreferrer">Deployed</a> : ''}
      </div>
    </div>
      
    </div>
  );
}

Pictures.propTypes = {
    source: PropTypes.string,
    deployed: PropTypes.string,
    alt: PropTypes.string,
    github: PropTypes.string,
  };
  
  Pictures.defaultProps = {
    source: '',
    deployed: '',
    alt: '',
    github: '',
  };
export default Pictures;
