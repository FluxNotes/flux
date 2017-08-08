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
        this._newShortcut = this._newShortcut.bind(this);
    }

    _newShortcut(e, i) {
        console.log(`new shortcut ${i}`);
        e.preventDefault();
        this.props.changeShortcut(this.props.shortcuts[i]);
    }

    render() {
        return (
            <div id="forms-panel" className="dashboard-panel">
                <List>
                    {this.props.shortcuts.map((t, i) => {
                        return (
                            <ListItem
                                key={i}
                                id={t}
                                primaryText={t}
                                onClick={(e) => this._newShortcut(e, i)}
                            />
                        );
                    })}
                </List>
            </div>
        )
    }
}

export default FormList;
