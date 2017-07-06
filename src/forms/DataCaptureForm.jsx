// React imports
import React, {Component} from 'react';
// Our components
import StagingForm from './StagingForm';
// material-ui
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';
// Styling
import './DataCaptureForm.css';

const styles = {
    customWidth: {
        width: 250
    },
};

class DataCaptureForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
    }

    render() {
        let content = null;

        if (this.state.value === 2) {
            content = (
                <StagingForm
                    onStagingTUpdate={this.props.onStagingTUpdate}
                    onStagingNUpdate={this.props.onStagingNUpdate}
                    onStagingMUpdate={this.props.onStagingMUpdate}
                    onStageUpdate={this.props.onStageUpdate}

                    calculateStage={this.props.calculateStage}

                    tumorSize={this.props.tumorSize}
                    nodeSize={this.props.nodeSize}
                    metastasis={this.props.metastasis}
                    stage={this.props.stage}
                />
            );
        } else {
            content = <p>Nothing to show</p>
        }

        return (
            <div>
                <h1>Data Capture</h1>
                <Divider className="divider"/>
                <div>
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={styles.customWidth}
                        autoWidth={false}
                    >
                        <MenuItem value={1} primaryText="<Select Missing Data>"/>
                        <MenuItem value={2} primaryText="Staging"/>
                        <MenuItem value={3} primaryText="Progression"/>
                        <MenuItem value={4} primaryText="Toxicity"/>
                    </DropDownMenu>
                </div>
                <Divider className="divider"/>
                {content}
            </div>
        );
    }
}
export default DataCaptureForm;
