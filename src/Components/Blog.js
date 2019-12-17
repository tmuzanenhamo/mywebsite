import React, { useState, useEffect }  from 'react';
import butter from './butter-client';
import PostSnippet from './PostSnippet';
import '../App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const Blog = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1, 
        page_size: 10
      });
      setData(response.data);
    } catch(e) {
      setError(`There was an error: ${e.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = () => (
    <div>
      {data.data.map((post, i) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  );

  const getContent = () => {
    if ( loading ) return <p className= 'blog-p'>Fetching posts...</p>;
    if ( error ) return <p>{error}</p>;
    if ( !data ) return null;
    return getPosts();
  }

  return (
    <div className = "blog-main">
       <div className = 'card' >  
      <div className = "card-body">
      <div className = "centered"></div>
      <h1 className = "blog-h">Welcome to my Blog</h1>
      {getContent()}
    </div>
    </div>
    </div>
  );
}

export default Blog;