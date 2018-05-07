import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialButton from 'material-ui/Button';
import './PickListOptionsPanel.css';

export default class PickListOptionsPanel extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     array: [
        //         { trigger: '@condition'},
        //         { trigger: '@procedure'}
        //     ]
        // };
    }



    // Switch view (i.e clinical notes view or context tray)
    toggleView(mode) {
        this.props.updateNoteAssistantMode(mode);
    }

    render() {

        return (
            <div className="pickList-options-panel">
                <div>
                    Pick List Options Panel
                </div>
                <MaterialButton
                    raised
                    id="cancel-btn"
                    onClick={() => {
                        this.toggleView("clinical-notes")
                    }}>
                    Cancel
                </MaterialButton>
            </div>
        );
    }
}

PickListOptionsPanel.proptypes = {
    updateNoteAssistantMode: PropTypes.func.isRequired,
}
