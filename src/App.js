import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ModelPage from './pages/ModelPage';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/model/:type">
            <ModelPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
