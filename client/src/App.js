import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/player');
        const players = await response.json();
        console.log('players', players);
        return setPlayers(players);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="App">
      <Players players={players} />
    </div>
  );
}

export default App;
