import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from '../elements/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import './NavBar.css';

const styles = {
    root: { width: '100%', },
    flex: { flex: 1, fontSize: 24, fontWeight: 600, },
};

const drawerThemeForPosition = createMuiTheme({
    overrides: { MuiDrawer: { paper: { top: '64px' }}}
})

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const classes = this.props.classes;
        const login = (this.props.supportLogin) ? (<Button style={{ color: "#17263f" }}>Dr.  Brown483 logged in</Button> ) : "";
        const showMenu = (this.props.menuItems && this.props.menuItems.length > 0);
        let menuItemComponents = "";

        if (showMenu) {
            menuItemComponents = this.props.menuItems.map((menuItem) => {
                return <MenuItem key={menuItem.label} onTouchTap={menuItem.action}>{menuItem.label}</MenuItem>;
            });
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" className="navbar-custom">
                    <Toolbar>
                        {showMenu &&
                            <IconButton style={{margin: '0px 8px 0px -16px' }} aria-label="Menu" onClick={this.toggleDrawer.bind(this)}>
                                <MenuIcon/>
                            </IconButton>
                        }

                        <img src="fluxnotes_logo_color.png" height="40px" width="30px" alt="Flux Notes logo" />&nbsp;&nbsp;

                        <Typography
                            type="title"
                            style={{color:"#17263f", fontFamily: '"Open Sans", Arial, sans-serif'}}
                            className={classes.flex}>
                            {this.props.title}
                        </Typography>

                        {login}
                    </Toolbar>
                </AppBar>

                {showMenu ?
                    <MuiThemeProvider theme={drawerThemeForPosition}>
                        <Drawer
                            open={this.state.open}
                            onRequestClose={this.toggleDrawer}
                            onClick={this.toggleDrawer}>
                            {menuItemComponents}
                        </Drawer>
                    </MuiThemeProvider> : null
                }
            </div>
        );
    }
}

NavBar.proptypes = {
    title: PropTypes.string.isRequired,
    supportLogin: PropTypes.bool.isRequired,
    menuItems: PropTypes.array
}

export default withStyles(styles)(NavBar);