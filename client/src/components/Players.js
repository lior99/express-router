import React from 'react';
import Player from './Player';

function Players({ players }) {
  return (
    <div className="players-container">
      {players &&
        players.length > 0 &&
        players.map((player, index) => (
          <Player key={`player_${index}`} data={player} />
        ))}
    </div>
  );
}

export default Players;
