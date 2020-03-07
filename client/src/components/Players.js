import React from 'react';
import Player from './Player';

function Players({ players }) {
  return (
    <div className="players-container">
      <div className="header">Players</div>
      <div className="players">
        {players &&
          players.length &&
          players.map((player, index) => (
            <Player key={`player_${index}`} data={player} />
          ))}
      </div>
    </div>
  );
}

export default Players;
