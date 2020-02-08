import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://192.168.33.10:8080/api/player')
      .then(response => response.json())
      .then(players => {
        console.log('players', players);
        return setPlayers(players);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Players players={players} />
    </div>
  );
}

export default App;
