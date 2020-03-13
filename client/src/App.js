import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Players from './components/Players';
import AddPlayer from './components/AddPlayer';
import Header from './components/Header/Header';

const CustomRouter = () => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route path="/addplayer" strict>
          <AddPlayer />
        </Route>
        <Route path="/" strict>
          <Players />
        </Route>
      </Switch>
    </Router>
  </div>
);

function App() {
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
