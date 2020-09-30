import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import image from "./pages/background.jpg";

import {
  HomeComponent,
} from './pages';

function App() {
  return (
    <div className="App">

      {/* <div className="backgroundImage">
        <img src={image} alt="background-image"/>
      </div> */}

      <div className="appContainer">
        <Router>
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </Router>
      </div>

      {/* <div className="donateNow">
        <p>
          DONATE NOW
        </p>
      </div> */}

    </div>
  );
}

export default App;
