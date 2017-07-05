import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar';

import './NavBar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
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
    this.props.onStructuredFieldEntered("staging");
  }

  handleExitStaging() {
    this.setState({
      open: false
    });
    this.props.onStructuredFieldExited("staging");
  }

  handleEnterDataCapture() {
    this.setState({
      open: false
    });
    this.props.onStructuredFieldEntered("dataCapture");
  }

  handleExitDataCapture() {
    this.setState({
      open: false
    });
    this.props.onStructuredFieldExited("dataCapture");
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
          open={this.state.open}
         >
          <MenuItem onTouchTap={this.handleEnterStaging.bind(this)}>Enter Staging</MenuItem>
          <MenuItem onTouchTap={this.handleExitStaging.bind(this)}>Exit Staging</MenuItem>
          <MenuItem onTouchTap={this.handleEnterDataCapture.bind(this)}>Enter Data Capture</MenuItem>
          <MenuItem onTouchTap={this.handleExitDataCapture.bind(this)}>Exit Data Capture</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
