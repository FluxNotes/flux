import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import NavBar from '../nav/NavBar';
import FormList from '../forms/FormList';
import ShortcutViewer from '../viewer/ShortcutViewer';
import ShortcutManager from '../shortcuts/ShortcutManager';
import Lang from 'lodash'
import './SlimApp.css';

class SlimApp extends Component {
    constructor(props) {
        super(props);

        this.shortcuts = ["progression", "staging", "toxicity"];
        this.shortcutManager = new ShortcutManager(this.shortcuts);

        this.state = {
            currentShortcut: null
        };
    }

    /* 
     * Change the current shortcut to be the new type of shortcut  
     */
    changeShortcut = (shortcutType) => {
        const newShortcut = (Lang.isNull(shortcutType)) ? null : this.shortcutManager.createShortcut(shortcutType, this.handleShortcutUpdate);
        this.setState({
            currentShortcut: newShortcut
        });
    }

    /* 
     * When updating the shortcut, make sure to setState with the new value
     */
    handleShortcutUpdate = (s) => {
        (s !== "") && this.setState({currentShortcut: s});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="SlimApp">
                    <NavBar title="Flux Notes Lite"/>
                    <Grid className="SlimApp-content" fluid>
                        <div id="forms-panel">
                            <Row center="xs">
                                <Col className="no-padding" xs={3}>
                                    {/*No need for formsearch right now*/}
                                    {/*<FormSearch />*/}
                                    <FormList
                                        shortcuts={['Overview', 'Progression', 'Toxicity']}
                                        currentShortcut={this.state.currentShortcut}
                                        changeShortcut={this.changeShortcut}
                                    />
                                </Col>
                                <Col className="no-padding" xs={9}>
                                    <ShortcutViewer
                                        currentShortcut={this.state.currentShortcut}
                                        onShortcutUpdate={this.handleShortcutUpdate}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SlimApp;
