// React imports
import React, {Component} from 'react';
// Our components
import TemplateForm from './TemplateForm';
import DataCaptureForm from './DataCaptureForm';
// material-ui
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
// Lodash component
import Lang from 'lodash'
// Styling
import './FormList.css';

class FormList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="forms-panel" className="dashboard-panel">

                    <List>
                        <ListItem primaryText="Inbox"  />
                        <ListItem primaryText="Starred" />
                        <ListItem primaryText="Sent mail" />
                        <ListItem primaryText="Drafts"  />
                        <ListItem primaryText="Inbox"  />
                    </List>

            </div>
        )
    }
}

export default FormList;
