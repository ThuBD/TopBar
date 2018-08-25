import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from './textfield.jsx';
import GraphSelector from './graphs/Scattered.jsx';

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

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: null,
    }
  };

  handleChange(e) {
    this.renderTracker();
  }

  renderTracker() {
    this.setState({currentState: <TextField/>})
  }

  renderGraph() {
    this.setState({currentState: <GraphSelector/>})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="primary" className={classes.flex}>
              AppCounts
            </Typography>

            <Button color="primary" style={{fontSize: "12px"}}>
            <i className="material-icons md-48">view_quilt</i>
            Dashboard
            </Button>
            <Button color="primary" style={{fontSize: "12px"}} onClick={e => this.handleChange(e)}>
            <i className="material-icons md-48">playlist_add</i>
            Tracker
            </Button>
            <Button color="primary" style={{fontSize: "12px"}}>
            <i className="material-icons md-48">perm_contact_calendar</i>
            Contacts
            </Button>
            <Button color="primary" style={{fontSize: "12px"}}>
            <i className="material-icons md-48">format_list_bulleted</i>
            To-Dos
            </Button>
            <Button color="primary" style={{fontSize: "12px"}} onClick={() => this.renderGraph()}>
            <i className="material-icons md-48">show_chart</i>
            Analytics
            </Button>
            <Button color="primary" style={{fontSize: "12px"}}>
            <i className="material-icons md-48">face</i>
            Account
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      {this.state.currentState}
      </div>
    );
  };
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);