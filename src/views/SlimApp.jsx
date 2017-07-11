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
// Shortcut Classes
//import Progression from '../../lib/progression_shortcut.js'
//import Toxicity from '../../lib/toxicity_shortcut.js'
import ProgressionShortcut from '../shortcuts/ProgressionShortcut';
import ToxicityShortcut from '../shortcuts/ToxicityShortcut';
// Lodash component
import Lang from 'lodash'

// Styling
import './SlimApp.css';

class SlimApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentShortcut: null
        };
		
		this.changeShortcut = this.changeShortcut.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
    }
	
    changeShortcut(shortcutType) {
        console.log("shortcut type");
        console.log(shortcutType);
        // console.log("structured field entered: " + field);
        if (Lang.isNull(shortcutType)) {   
            this.setState({
                currentShortcut: null
            });
        } else { 
            switch (shortcutType.toLowerCase()) { 
                case "progression": 
                    this.setState({
                        currentShortcut: new ProgressionShortcut(this.handleUpdate)
                    });
                    break;

                case "toxicity": 
                    this.setState({
                        currentShortcut: new ToxicityShortcut(this.handleUpdate)
                    });
                    break;

                default: 
                    console.error(`Error: Trying to change shortcut to ${shortcutType.toLowerCase()}, which is an invalid shortcut type`);
            }
        }
    }
	
	handleUpdate(shortcut) {
		this.setState({
			currentShortcut: shortcut
		});
	}

    render() {
	
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="SlimApp">
                    <NavBar />
                    <Grid className="SlimApp-content" fluid>
                        <Row center="xs">
                           <Col sm={5}>
                              <FormTray
                                    currentShortcut={this.state.currentShortcut}
									changeShortcut={this.changeShortcut}
                                />
                           </Col>
                            <Col sm={7}>
                                <ShortcutViewer
                                    currentShortcut={this.state.currentShortcut}
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
