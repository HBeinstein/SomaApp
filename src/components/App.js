import React from "react";
import '../assets/css/index.css';
import '../assets/css/navbar.css';
import '../assets/css/app.css';
import Home from './Home';
import About from './About';
import MeditationControl from './MeditationControl';
import AuthorizationControl from './AuthControl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="navbar-full-container">
        <Link to="/"><img src="./img/logo5.png" className="logo"></img></Link>
        

          <div className="navbar-links-container">
            <Link to="/"><h5>Home</h5></Link>
            <Link to="/about"><h5>About</h5></Link>
            <Link to="/meditations"><h5>Meditations</h5></Link>
            <Link to="/authorize"><h5>Authorize</h5></Link>
          </div>
        </div>

        <div className="app-content-container">
          <Switch>
            <Route path="/authorize">
              <AuthorizationControl />
            </Route>
            <Route path="/meditations">
              <MeditationControl />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
