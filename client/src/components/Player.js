import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UploadAvatar from './UploadAvatar';

function Player({ data }) {
  const { playerName, avatar } = data;
  console.log('data', data);

  return (
    <div className="player">
      <div className="name">{playerName}</div>
      <div>
        {avatar === 'N/A' ? (
          <span className="empty-avatar">N/A</span>
        ) : (
          <img src={avatar} />
        )}
      </div>
    </div>
  );
}

export default Player;
