import React from "react";
import Home from './Home';
import About from './About';
import MeditationControl from './MeditationControl';
import AuthorizationControl from './AuthControl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
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
  );
}
