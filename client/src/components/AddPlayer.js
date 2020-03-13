import React, { useState } from 'react';
import UploadAvatar from './UploadAvatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState('');
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const updatePlayerName = event => {
    setPlayerName(event.target.value);
  };

  const addPlayer = async () => {
    const url = 'http://localhost:8080/api/player';
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        playerName
      })
    });

    const result = await response.json();
    setSuccessMessage(`Player ${playerName} was addedd successfully`);
    setOpen(true);
    setPlayerName('');
  };

  const handleOnClose = () => setOpen(false);

  return (
    <div>
      <form className="form-container">
        <div className="form-row">
          <TextField
            id="playerName"
            label="Player Name"
            value={playerName}
            onChange={updatePlayerName}
          />
        </div>
        {/* <div className="form-row">
          <label htmlFor="playerAvatar">Avatar</label>
          <UploadAvatar id="playerAvatar" /> 
        </div> */}
        <Button variant="contained" color="primary" onClick={addPlayer}>
          Add Player
        </Button>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleOnClose}
        message={successMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleOnClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default AddPlayer;
