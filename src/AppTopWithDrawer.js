import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar'

class AppTopWithDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }
  
  render() {
    return (
      <div>
        <AppBar 
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)} 
          title="Flux Data Curator"/>
        <Drawer 
          containerStyle={{'top': '64px'}} 
          open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default AppTopWithDrawer;