import React, { useEffect, useState } from 'react';
import Player from './Player';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/player');
        const players = await response.json();
        return setPlayers(players);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="players">
      {players.length ? (
        players.map((player, index) => (
          <Player key={`player_${index}`} data={player} />
        ))
      ) : (
        <div className="no-data-available">No data available</div>
      )}
    </div>
  );
}

export default Players;
