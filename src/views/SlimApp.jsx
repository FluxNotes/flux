// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import NavBar from '../nav/NavBar';
import ShortcutViewer from '../viewer/ShortcutViewer';
import FormTray from '../forms/FormTray';

import './SlimApp.css';

class SlimApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* staging */
            tumorSize: '',
            nodeSize: '',
            metastasis: '',
            SummaryItemToInsert: '',
            withinStructuredField: null,
            patient: null,
            currentDataItem: {
                shortcut: "place holder string for shortcut"
            }
        };

        this.handleStagingTUpdate = this.handleStagingTUpdate.bind(this);
        this.handleStagingNUpdate = this.handleStagingNUpdate.bind(this);
        this.handleStagingMUpdate = this.handleStagingMUpdate.bind(this);
        this.handleSummaryItemSelected = this.handleSummaryItemSelected.bind(this);
        this.handleStructuredFieldEntered = this.handleStructuredFieldEntered.bind(this);
        this.handleStructuredFieldExited = this.handleStructuredFieldExited.bind(this);
    }

    handleStructuredFieldEntered(field) {
        // console.log("structured field entered: " + field);
        this.setState({
            withinStructuredField: field
        })
    }

    handleStructuredFieldExited(field) {
        // console.log("structured field exited: " + field);
        this.setState({
            withinStructuredField: null
        })
    }

    componentDidUpdate(a, b) {
        // Nothing right now
    }

    handleSummaryItemSelected(itemText) {
        if (itemText) {
            this.setState({SummaryItemToInsert: itemText});
        }
    }

    handleStagingTUpdate(t) {
        console.log(`Updated: ${t}`);
        (t !== "") && this.setState({tumorSize: t});
    }

    handleStagingNUpdate(n) {
        console.log(`Updated: ${n}`);
        (n !== "") && this.setState({nodeSize: n});
    }

    handleStagingMUpdate(m) {
        console.log(`Updated: ${m}`);
        (m !== "") && this.setState({metastasis: m});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="SlimApp">
                    <NavBar
                        onStructuredFieldEntered={this.handleStructuredFieldEntered}
                        onStructuredFieldExited={this.handleStructuredFieldExited}
                    />
                    <Grid className="SlimApp-content" fluid>
                        <Row center="xs">
                            <Col sm={4}>
                                <FormTray
                                    // Update functions
                                    onStagingTUpdate={this.handleStagingTUpdate}
                                    onStagingNUpdate={this.handleStagingNUpdate}
                                    onStagingMUpdate={this.handleStagingMUpdate}
                                    // Properties
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    withinStructuredField={this.state.withinStructuredField}
                                />
                            </Col>
                            <Col sm={7}>
                                <ShortcutViewer
                                    currentDataItem={this.state.currentDataItem}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SlimApp;
