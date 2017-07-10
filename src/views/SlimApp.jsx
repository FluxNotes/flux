// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
// Application components:
import NavBar from '../nav/NavBar';
import FormTray from '../forms/FormTray';
// Shortcut Classes
import Progression from '../../lib/progression_shortcut.js'
import Toxicity from '../../lib/toxicity_shortcut.js'
// Lodash component
import Lang from 'lodash'

// Styling
import './SlimApp.css';

class SlimApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shortcut: null
        };
    }

    changeShortcut(shortcutType) {
        // console.log("structured field entered: " + field);
        if (Lang.isNull(shortcutType)) {   
            this.setState({
                currentShortcut: null
            });
        } else { 
            switch (shortcutType.toLowerCase()) { 
                case "progression": 
                    this.setState({
                        currentShortcut: new Progression()
                    });
                    break;

                case "toxicity": 
                    this.setState({
                        currentShortcut: new Toxicity()
                    });
                    break;

                default: 
                    console.error(`Error: Trying to change shortcut to ${shortcutType.toLowerCase()}, which is an invalid shortcut type`);
            }
        }
    }

    render() {
/*        const curProgression = new Progression();
        console.log(curProgression.getAsString());*/
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="SlimApp">
                    <NavBar />
                    <Grid className="SlimApp-content" fluid>
                        <Row center="xs">
                           <Col sm={5}>
                              <FormTray />
                           </Col>
                            <Col sm={7}>
                                <Paper style={{minWidth: "100%", minHeight: "100%", marginTop: "16px"}}> 
{/*                                    <button onClick={(e) => { curProgression.updateAttr("status", "Stable"); console.log(curProgression.getAsString()); }}>
                                    </button>*/}
                                </Paper>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SlimApp;
