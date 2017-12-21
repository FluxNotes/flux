import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import NavBar from '../nav/NavBar';
import FormList from '../forms/FormList';
import ShortcutViewer from '../viewer/ShortcutViewer';
import ShortcutManager from '../shortcuts/ShortcutManager';
import Lang from 'lodash'
import '../styles/SlimApp.css';

class SlimApp extends Component {
    constructor(props) {
        super(props);

        this.shortcuts = []; // not currently used
        this.shortcutManager = new ShortcutManager(this.shortcuts);

        this.state = {
            currentShortcut: null
        };
    }

    /*
     * Change the current shortcut to be the new type of shortcut
     */
    changeShortcut = (shortcutType) => {
        const newShortcut = (Lang.isNull(shortcutType)) ? null : this.shortcutManager.createShortcut(null, "#" + shortcutType.toLowerCase(), this.handleShortcutUpdate);
        if (newShortcut) {
            newShortcut.setConfiguration((this.props.shortcutConfigurations) ?
                    this.props.shortcutConfigurations[shortcutType] : {});
        }
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
                <div className="SlimApp">
                    <NavBar title={this.props.display} supportLogin={false}/>
                    <Grid className="SlimApp-content" fluid>
                        <div id="forms-panel">
                            <Row center="xs">
                                <Col className="no-padding" xs={3}>
                                    {/*No need for formsearch right now*/}
                                    {/*<FormSearch />*/}
                                    <FormList
                                        shortcuts={['About Flux Notes Lite'].concat(this.props.shortcuts)} //, 'Disease Status', 'Toxicity'
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
        );
    }
}

SlimApp.proptypes = {
    shortcutConfigurations: PropTypes.object.isRequired,
    shortcuts: PropTypes.array.isRequired,
    display: PropTypes.string.isRequired
}

export default SlimApp;
