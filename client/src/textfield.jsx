import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    width: 300,
  },
});

const statusList = [
  {
   value: 'Applied',
   label: 'Applied',
  },
  {
    value: 'Phone Call',
    label: 'Phone Call',
  },
  { 
    value: 'Interview',
    label: 'Interview',
  },
  {
    value: 'Offer',
    label: 'Offer',
  },
  {
    value: 'Accepted',
    label: 'Accepted',
  },
  {
    value: 'Cancelled',
    label: 'Cancelled',
  },
  {
    value: 'No Offer',
    label: 'No Offer',
  },
]

class TextFields extends React.Component {
  constructor(props) {
    super(props);
    const currentDate = new Date
    this.state = {
      company: '',
      position: '',
      location: '',
      status: 'status',
      date : `${currentDate.getFullYear()}-0${currentDate.getMonth()}-${currentDate.getDate()}`
    };
  }

  handleChange(event) {
    console.log("EVENTTT", event)
    if (event.id === 'company') {
      this.setState({
        company: event.value
      });
    } else if (event.id === 'position') {
      this.setState({
        position: event.value
      });
    } else if (event.id === 'location') {
      this.setState({
        location: event.value
      });
    } else if (event.id === undefined) {
      this.setState({
        status: event.value
      })
    }
  };

  handleDateChange(date){
    console.log(this.state.date)
    this.setState({date: date.value})
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">       <Grid item>
        <TextField
          id="company"
          label="Company"
          className={classes.textField}
          value={this.state.company}
          onChange={(e) => this.handleChange(e.target)}
          margin="normal"
        />
        </Grid>
        <TextField
          id="position"
          label="Position"
          className={classes.textField}
          value={this.state.position}
          onChange={(e) => this.handleChange(e.target)}
          margin="normal"
        />
        <TextField
          id="location"
          label="Location"
          className={classes.textField}
          value={this.state.location}
          onChange={(e) => this.handleChange(e.target)}
          margin="normal"
        />
        <TextField
          id="number"
          label="Number"
          value={this.state.age}
          // onChange={(e) => this.handleChange(e.target.value)}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="date"
          label="Application Date"
          type="date"
          defaultValue = {this.state.date}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => this.handleDateChange(e.target)}
        />
        <TextField
          id="status"
          select
          label="Application Status"
          className={classes.textField}
          value={this.state.status}
          onChange={(e) => this.handleChange(e.target)}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your application status"
          margin="normal"
        >
          {statusList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    );
  }
}

TextFields.propTypes= {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);













