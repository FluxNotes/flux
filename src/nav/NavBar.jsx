import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import './NavBar.css';

const styles = {
    root: {
        marginTop: 30,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
};

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
    this.props.onStructuredFieldEntered("progression");
  }

  handleExitStaging() {
    this.setState({
      open: false
    });
    this.props.onStructuredFieldExited("progression");
  }
    
  render() {
    const classes = this.props.classes;
    const login = (this.props.supportLogin) ? ( <Button color="contrast">Dr. X123 logged in</Button> ) : "";
    return (
      <div className={classes.root}>
        <AppBar position="static" className="navbar">
            <Toolbar>
                <IconButton color="contrast" aria-label="Menu" onClick={this.toggleDrawer.bind(this)}>
                    <MenuIcon/>
                </IconButton>
                <Typography type="title" color="inherit" className={classes.flex}>
                {this.props.title}
                </Typography>
                {login}
            </Toolbar>
        </AppBar>          
        <Drawer
          containerStyle={{'top': '64px'}}
          open={this.state.open}
         >
          <MenuItem onTouchTap={this.handleEnterStaging.bind(this)}>Enter Staging</MenuItem>
          <MenuItem onTouchTap={this.handleExitStaging.bind(this)}>Exit Staging</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);