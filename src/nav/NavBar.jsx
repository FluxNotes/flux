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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import './NavBar.css';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
        fontSize: 24,
        fontWeight: 400,
    },
};

const drawerThemeForPosition = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper:  {
        top: '64px'
      }
    }
  }
}) 

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }

  handleNewNote() {
    console.log("new note");
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
        <MuiThemeProvider theme={drawerThemeForPosition}>
        <Drawer
            open={this.state.open}
            onRequestClose={this.toggleDrawer}
            onClick={this.toggleDrawer}
        >
            <MenuItem onTouchTap={this.handleNewNote.bind(this)}>New Note</MenuItem>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);