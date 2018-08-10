import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ButtonSetFillFieldForPlaceholder from './fillFieldComponents/ButtonSetFillFieldForPlaceholder';
import Lang from 'lodash';

import './FillPlaceholder.css';

export default class FillPlaceholder extends Component {
    constructor(props) {
        super(props);

        this.onDone = this.onDone.bind(this);
        this.state = {
            done: false,
            expanded: false,
            currentField: 0,
        }
    }
    onDone = (event) => {
        this.setState({ done: event.target.checked });
        this.props.placeholder.done = event.target.checked;
    };

    onExpand = (event) => {
        this.setState({ expanded: !this.state.expanded });
    };

    onClickOnField = (index, event) => {
        this.setState({ currentField: index });
    };

    onSetValue = (attributeSpec, newValue) => {
        this.props.placeholder.setAttributeValue(attributeSpec.name, newValue);
        this.forceUpdate();
        this.setState({ currentField: this.state.currentField + 1});
    }

    createFillFieldForPlaceholder = (attributeSpec, value) => {
        if (attributeSpec.type === 'radioButtons') {
            return <ButtonSetFillFieldForPlaceholder attributeSpec={attributeSpec} value={value} updateValue={this.onSetValue.bind(this, attributeSpec)} />
        }
        return <div>Unknown component type: {attributeSpec.type}</div>;
    };

    render() {
        /*
        "formSpec": {   "title": "Disease Status",
                    "attributes": [ {   "title":"Status", "type":"radioButtons", "values": {"category":"progression", "valueSet":"status"} },
                                    {   "title":"Rationale for status", "type":"checkboxes", "values": {"category":"progression", "valueSet":"reason"}}
                                  ]
                },*/
        let columns = [ ];
        this.props.placeholder.metadata.formSpec.attributes.forEach((attribute, index) => {
            const value = this.props.placeholder.getAttributeValue(attribute.name);
            columns.push(<span className="shortcut-field-title" key={`${index}-label`}>{`${attribute.title}: `}</span>);
            if (Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                columns.push(<span onClick={this.onClickOnField.bind(this, index)} className="missing-data" key={`${index}-value`}>No Data</span>);
            } else {
                columns.push(<span onClick={this.onClickOnField.bind(this, index)} className="structured-data" key={`${index}-value`}>{value}</span>);
            }
        });
        let currentFieldRowInSummary = "";
        if (!this.state.expanded) {
            const attribute = this.props.placeholder.metadata.formSpec.attributes[this.state.currentField];
            const value = this.props.placeholder.getAttributeValue(attribute.name);
            currentFieldRowInSummary = (
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2} style={{display: 'flex', alignItems: 'center' }}><span>{attribute.title}</span></Grid>
                    <Grid item xs={9}><span>{this.createFillFieldForPlaceholder(attribute, value)}</span></Grid>
                </Grid>
            );
        }
        return (
            <ExpansionPanel expanded={this.state.expanded}>
                <ExpansionPanelSummary style={{ backgroundColor: this.props.backgroundColor }} expandIcon={<ExpandMoreIcon onClick={this.onExpand}/>}>
                    <Grid container>
                        <Grid item xs={3}>
                            <span className="done-checkbox"><Checkbox style={{ width: 26, height: 26 }} checked={this.state.done} value="done" onChange={this.onDone} color="primary" /></span>
                            <span className="shortcut-name" key="0">{this.props.placeholder.shortcutName}</span>
                        </Grid>
                        <Grid item xs={9}> 
                            {columns}
                        </Grid>
                        {currentFieldRowInSummary}
                    </Grid>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ backgroundColor: this.props.backgroundColor }}>
                    <div>expanded</div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

FillPlaceholder.propTypes = {
    placeholder: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};