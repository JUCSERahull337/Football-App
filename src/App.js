//import logo from './logo.svg';
//import './App.css';
//import {useState, useEffect} from 'react'
//import Team from './components/Team/Team'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";
//import '../src/components/Home/Home.css'

function App() {
 
  
  
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>

        <Route path='/about/:teamId'>
          <TeamDetails></TeamDetails>
        </Route>


        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <NoMatch/>
           </Route>
      </Switch>
    </Router>
  );
}

export default App;
