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
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import './NavBar.css';

const styles = {
    root: { width: '100%', },
    flex: { flex: 1, fontSize: 24, fontWeight: 400, },
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
        const login = (this.props.supportLogin) ? ( <Button color="contrast">Dr. X123 logged in</Button> ) : "";
        const showMenu = (this.props.menuItems && this.props.menuItems.length > 0);
        let menuItemComponents = "";

        if (showMenu) {
            menuItemComponents = this.props.menuItems.map((menuItem) => {
                return <MenuItem key={menuItem.label} onTouchTap={menuItem.action}>{menuItem.label}</MenuItem>;
            });
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" className="navbar">
                    <Toolbar>
                        {showMenu ?
                            <IconButton style={{margin: '0px 8px 0px -16px' }} color="contrast" aria-label="Menu" onClick={this.toggleDrawer.bind(this)}>
                                <MenuIcon/>
                            </IconButton> : null}
                        <Typography type="title" color="inherit" className={classes.flex}>
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

export default withStyles(styles)(NavBar);