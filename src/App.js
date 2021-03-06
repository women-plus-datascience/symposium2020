import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './Home';
import PosterGuidelines from './PosterGuidelines';
import Sponsors from './Sponsors';
import Other from './Other';
import './App.css';

function App() {
  return (
    <Router basename="/home">
      <div className="section section-1">
        <h1 className="title">
          <div className="logos">
            <img src="/home/images/msu-helmet-green.png" className="icon msu" alt="MSU" />
            <img src="/home/images/um.png" className="icon" alt="UM" />
          </div>
          <span className="plus-sign">Women+</span><br />Data Science
        </h1>
        <div className="info">
          <span>April 17, 2020</span>
          <div className="separator"></div>
          <span>9:00 AM — 5:00 PM</span>
          <div className="separator"></div>
          <span>Lake Huron Room, MSU Union</span>
        </div>
        <span className="description">
          <br />
          Michigan State University & University of Michigan invite you to their joint Women+ Data Science Symposium, 2020!
          <br />
          <i style={{color: '#666'}}>Transportation provided from Ann Arbor to East Lansing</i>
          <br />
          <b><a href="https://docs.google.com/forms/d/e/1FAIpQLSfwwdGOItncuSTJqOVBnnlvF6FgyR4Lhiyc4A6HTRorYMnPUg/viewform" className="registration">EVENT REGISTRATION</a></b>
        </span>
        <nav>
          <ul>
            <li><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/poster-talk-guidelines">Poster & Talk Guidelines</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/sponsors">Sponsors</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/other-info">Other Information</NavLink></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/poster-talk-guidelines">
          <PosterGuidelines />
        </Route>
        <Route path="/sponsors">
          <Sponsors />
        </Route>
        <Route path="/other-info">
          <Other />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <span className="description" style={{'fontSize': '1rem', 'marginBottom': '2rem', 'color': '#888'}}>
        <b>Organizers</b><br />
        <span><a style={{color: 'inherit'}} href="https://rladies-eastlansing.github.io/" target="_blank" rel="noopener noreferrer">R-Ladies East Lansing</a>, <a style={{color: 'inherit'}} href="https://midas.umich.edu" target="_blank" rel="noopener noreferrer">Michigan Institute for Data Science</a><br />Camille Archer (RLEL, MSU), Janani Ravi (RLEL, MSU); Jing Liu (MIDAS, UM)</span>
        <br />
        <br />
        <b>Program Committee</b><br />
        <span>Liz Munch (MSU), Parisa Kordjamshidi (MSU), Dola Pathak (MSU)<br />Marcy Harris (UM), Margaret Hedstrom (UM).</span>
      </span>

      <div className="section section-4">
        <h1 className="title smaller">
          <span className="plus-sign">Women+ </span><br />Data Science
        </h1>
        <img src="/home/images/rlel-sq-bord.png" className="icon" alt="RLEL" />
        <img src="/home/images/midas.png" className="icon" alt="MIDAS" />
        <img src="/home/images/msu-helmet-green.png" className="icon msu" alt="MSU" />
      </div>
    </Router>
  );
}

export default App;
