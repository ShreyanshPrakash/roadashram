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
  ProblemComponent,
  DonateComponent,
  RoadAshramComponent,
  PeopleComponent,
  JourneyComponent,
  VolunteerComponent,
  ContactComponent,
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
            <Route path="/problem">
              <ProblemComponent />
            </Route>
            <Route path="/donate">
              <DonateComponent />
            </Route>
            <Route path="/roadashram">
              <RoadAshramComponent />
            </Route>
            <Route path="/people">
              <PeopleComponent />
            </Route>
            <Route path="/journey">
              <JourneyComponent />
            </Route>
            <Route path="/volunteer">
              <VolunteerComponent />
            </Route>
            <Route path="/contact">
              <ContactComponent />
            </Route>
            <Route exact path="/">
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
