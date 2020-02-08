import React from 'react';

function Player({ data }) {
  const { name, avatar } = data;

  return (
    <div className="player">
      <div className="name">{name}</div>
      <div>
        <img src={avatar} />
      </div>
    </div>
  );
}

export default Player;
