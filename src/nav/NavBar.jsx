import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar'

import './NavBar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }

  handleEnterStaging() {
    this.setState({
      open: false
    });
    this.props.onStructuredFieldEntered("progression");
  }

  handleExitStaging() {
    this.setState({
      open: false
    });
    this.props.onStructuredFieldExited("progression");
  }

  render() {
    return (
      <div>
        <AppBar
          className="navbar"
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
          title="Flux Notes"/>
        <Drawer
          containerStyle={{'top': '64px'}}
          open={this.state.open}>
          <MenuItem onTouchTap={this.handleEnterStaging.bind(this)}>Enter Staging</MenuItem>
          <MenuItem onTouchTap={this.handleExitStaging.bind(this)}>Exit Staging</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
