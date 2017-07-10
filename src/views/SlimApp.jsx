// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import NavBar from '../nav/NavBar';
import ClinicalNotes from '../notes/ClinicalNotes';
import FormTray from '../forms/FormTray';
import Progression from '../../lib/progression_shortcut.js'

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
            patient: null
        };
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

    render() {
        const curProgression = new Progression();
        console.log(curProgression.getShortcut());
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="SlimApp">
                    <NavBar
                        onStructuredFieldEntered={this.handleStructuredFieldEntered}
                        onStructuredFieldExited={this.handleStructuredFieldExited}
                    />
                    <Grid className="SlimApp-content" fluid>
                        <Row center="xs">
                           <Col sm={5}>
                              <FormTray />
                           </Col>
                            <Col sm={7}>
                                <ClinicalNotes />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SlimApp;
