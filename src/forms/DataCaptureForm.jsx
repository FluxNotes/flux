// React imports
import React, {Component} from 'react';
// material-ui
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
// Lodash component
import Lang from 'lodash'
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
        const isCurrentShortcut = (!Lang.isNull(this.props.currentShortcut));
        let currentShortcutType = "";
        if (isCurrentShortcut) {
            currentShortcutType = this.props.currentShortcut.getShortcutType()
        }
        if (this.state.value === "") {
        } else if (this.state.value === "staging" && this.state.value === currentShortcutType) {            
            content = this.props.currentShortcut.getForm();
        } else if (this.state.value === "progression" && this.state.value === currentShortcutType) {
            content = this.props.currentShortcut.getForm();
        } else if (this.state.value === "toxicity" && this.state.value === currentShortcutType) {
            content = this.props.currentShortcut.getForm();
        } else if (this.state.value === "staging" || this.state.value === "progression" || this.state.value === "toxicity") {
            console.log('We might want to figure out how to change currentShortcut from this position')
            content = <p>Nothing to show</p>
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
                        <MenuItem value={""} primaryText="<Select Missing Data>"/>
                        <MenuItem value={"staging"} primaryText="Staging"/>
                        <MenuItem value={"progression"} primaryText="Progression"/>
                        <MenuItem value={"toxicity"} primaryText="Toxicity"/>
                    </DropDownMenu>
                </div>
                <Divider className="divider"/>
                {content}
            </div>
        );
    }
}
export default DataCaptureForm;
