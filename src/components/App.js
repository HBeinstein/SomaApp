import React from "react";
import Home from './Home';
import Mobile from './Mobile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mobile">
            <Mobile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
