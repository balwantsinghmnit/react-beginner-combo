import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import Cards from "./components/Cards";
import Calculator from './components/Calculator';
import MusicPlayer from './components/MusicPlayer';
import Notes from './components/Notes';
import Github from './components/Github';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Route exact path="/react-combo" render={props=>(
        <React.Fragment>
          <HomeContent/>
        </React.Fragment>
      )} />
      <Route path="/cards" component={Cards} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/github" component={Github} />
      <Route path="/music" component={MusicPlayer} />
      <Route path="/notes" component={Notes} />
      </div>
    </Router>
  );
}

export default App;
