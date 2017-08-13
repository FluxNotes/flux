// React imports
import React, {Component} from 'react';
// Our components
import TemplateForm from '../../forms/TemplateForm';
import DataCaptureForm from '../../forms/DataCaptureForm';
// material-ui
import Paper from 'material-ui/Paper';
// Lodash component
import Lang from 'lodash'

class ContextTray extends Component {
    /*
     need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
     to the correct entry form for the structured field. on exit, set to null.
     */

    constructor(props) {
        super(props);
        
        this._insertTemplate = this._insertTemplate.bind(this);
    }

    _insertTemplate(i) {
        console.log(`Inserting template ${i}`);
    }

    render() {
        let panelContent = null;
        if (Lang.isUndefined(this.props.patient)) { // NO PATIENT MODE
            if (!Lang.isNull(this.props.currentShortcut)) {
                panelContent = this.props.currentShortcut.getForm();
            } else {
                panelContent = (
                    <TemplateForm
                        patient={this.props.patient}
                        heading="Shortcuts"
                        templates={this.props.shortcuts}
                        handleClick={this._newShortcut}
                    />
                );
            }
        } else { // PATIENT MODE
			if (this.props.selectedText != null) {
                console.log(this.props);
                panelContent = (
                        <DataCaptureForm
                            // Update functions
                            changeCurrentShortcut={this.changeCurrentShortcut}
                            // Properties
                            currentShortcut={this.props.currentShortcut}
                        />
                );
            } else {
                panelContent = (
                        <TemplateForm
                            patient={this.props.patient}
                            heading="Available Templates"
                            templates={['op note', 'follow-up', 'consult note']}
                            handleClick={this._insertTemplate}
                        />
                );
            }
        }
        return (
            <div id="forms-panel" className="dashboard-panel">
                <Paper className="panel-content trio">
                    {panelContent}
                </Paper>
            </div>
        )
    }
}

export default ContextTray;
