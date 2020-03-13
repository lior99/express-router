import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const toggleMenuVisibility = () => {
    const newAnchorElValue = !anchorEl;
    setAnchorEl(newAnchorElValue);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon onClick={toggleMenuVisibility} />
          <Menu
            id="navigation-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <a href="/" className="menu-item">
                Home
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/addplayer" className="menu-item">
                Add Player
              </a>
            </MenuItem>
            <MenuItem>List Players</MenuItem>
          </Menu>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Players
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
