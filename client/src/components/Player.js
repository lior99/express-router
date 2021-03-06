import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UploadAvatar from './UploadAvatar';

function Player({ data }) {
  const { playerName, avatar } = data;

  return (
    <div className="player">
      <div className="name">{playerName}</div>
      <div>
        {avatar === 'N/A' ? (
          <div className="empty-avatar">
            <FontAwesomeIcon icon={faPlus} />
            <UploadAvatar />
          </div>
        ) : (
          <img src={avatar} />
        )}
      </div>
    </div>
  );
}

export default Player;
