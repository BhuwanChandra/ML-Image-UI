import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Image from './pages/Image';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/image">
            <Image />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
