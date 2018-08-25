import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Userinput from './userinput.jsx';
import Dropdown from './select.jsx';    
import GraphSelect from './graphs/graphSelector.jsx';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap';
import style from './style/app.css';
import Topbar from './topbar.jsx';
import MuiThemeProvider from '@material-ui/core/styles/muithemeprovider';
import theme from './themes.jsx';
import TextField from './textfield.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className="container">
      <MuiThemeProvider theme={theme}>
      <Topbar/>
      </MuiThemeProvider>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//           <select onChange = {this.handleSelect.bind(this)} >
//           {this.state.lines.map(value =>{
//            return <Eachline line = {value} handleSelect = {this.handleSelect.bind(this)}/>
//           })}
//           </select>