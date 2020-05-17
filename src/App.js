import React from 'react';
import {HashRouter as Router, Route, Switch} from  'react-router-dom'
import './App.css';
import MyNavbar from './Components/MyNavbar';
import Header from './Components/Header';
import About from './Components/About';
import NotFound from './Components/Pages/NotFound';
import Blog from './Components/Blog';
import Projects from "./Components/Projects";
import Resume from './Components/Resume';
import Post from './Components/Post';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154698381-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
    <div className="App">

      <MyNavbar/>
      <Switch>

        <Route exact path ="/" component={Header}/>
        <Route exact path ="/About" component={About}/>
        <Route  exact path = "/Blog" component= {Blog}/>
        <Route exact path= "/Projects" component={Projects}/>
        <Route exact path= "/Resume" component={Resume}/>
        <Route path="/blog/:slug" render={Post} />
        <Route component={NotFound}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
