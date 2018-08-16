import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};

function TopBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="primary" className={classes.flex}>
            AppliTrees
          </Typography>

          <Button color="primary" style={{fontSize: "12px"}}>
          <i class="material-icons md-48">view_quilt</i>
          Dashboard
          </Button>
          <Button color="primary" style={{fontSize: "12px"}}>
          <i class="material-icons md-48">playlist_add</i>
          Tracker
          </Button>
          <Button color="primary" style={{fontSize: "12px"}}>
          <i class="material-icons md-48">perm_contact_calendar</i>
          Contacts
          </Button>
          <Button color="primary" style={{fontSize: "12px"}}>
          <i class="material-icons md-48">format_list_bulleted</i>
          To-Dos
          </Button>
          <Button color="primary" style={{fontSize: "12px"}}>
          <i class="material-icons md-48">show_chart</i>
          Analytics
          </Button>
          <Button color="primary" style={{fontSize: "12px"}}>
          <i class="material-icons md-48">face</i>
          Account
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);