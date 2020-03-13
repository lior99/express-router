import React, { useState } from 'react';
import UploadAvatar from './UploadAvatar';

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState('');

  const updatePlayerName = event => {
    setPlayerName(event.target.value);
  };

  console.log('%cAddPLayer component', 'font-size: 40px; color: red');
  return (
    <div>
      <form>
        <div>
          <label htmlFor="playerName">Player Name:</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={updatePlayerName}
          />
        </div>
        <div>
          <label htmlFor="playerAvatar">Avatar</label>
          <UploadAvatar id="playerAvatar" />
        </div>
      </form>
    </div>
  );
};

export default AddPlayer;
