import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ButtonSetFillFieldForPlaceholder from './fillFieldComponents/ButtonSetFillFieldForPlaceholder';
import MultiButtonSetFillFieldForPlaceholder from './fillFieldComponents/MultiButtonSetFillFieldForPlaceholder';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import Lang from 'lodash';

import './FillPlaceholder.css';

export default class FillPlaceholder extends Component {
    constructor(props) {
        super(props);

        this.onDone = this.onDone.bind(this);
        this.calendarDom = null;

        this.state = {
            done: false,
            expanded: false,
            currentField: 0,
            error: null,
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (event) => {
        if (this.calendarDom && !this.calendarDom.contains(event.target)) this.setState({showCalendar: false});
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

    nextField = () => {
        if (this.state.currentField + 1 === this.props.placeholder.metadata.formSpec.attributes.length) {
            // User has entered final attribute, so mark row as done
            this.setState({ done: true });
            this.props.placeholder.done = true;
        } else {
            this.setState({ currentField: this.state.currentField + 1});
        }
    };

    onSetValue = (attributeSpec, newValue) => {
        const attributes = this.props.placeholder.getAttributeValue(attributeSpec.name);
        let error;
        if (Lang.isArray(attributes) && Lang.includes(attributes, newValue)) {
            Lang.remove(attributes, (attr) => {
                return attr === newValue;
            });
            error = this.props.placeholder.setAttributeValue(attributeSpec.name, attributes);
        } else {
            error = this.props.placeholder.setAttributeValue(attributeSpec.name, newValue);

            // We only want to increment the field if we are working on a non-expanded and non-multiselect attribute
            // This might only be a temporary workaround, we have to see how it goes as the other fields get implemented
            if (Lang.isNull(error) && !(this.state.expanded || Lang.isArray(attributes))) {
                this.nextField();
            }
        }
        this.setState({ error });
    };

    setCalendarTrue = (attributeSpec) => {
        this.setState({showCalendar: true});
        this.setState({calendarAttributeSpec: attributeSpec.name});
    }

    handleCalendarSelect = (attributeSpec, date) => {
        const dateSelected = date.format("D MMM YYYY");
        this.onSetValue(attributeSpec, dateSelected);
        this.setState({showCalendar: false})
    }

    createFillFieldForPlaceholder = (attributeSpec, value) => {
        if (attributeSpec.type === 'radioButtons') {
            return <ButtonSetFillFieldForPlaceholder attributeSpec={attributeSpec} value={value} updateValue={this.onSetValue.bind(this, attributeSpec)} />;
        } else if (attributeSpec.type === 'checkboxes') {
            return <MultiButtonSetFillFieldForPlaceholder attributeSpec={attributeSpec} value={value} updateValue={this.onSetValue.bind(this, attributeSpec)} nextField={this.state.expanded ? null : this.nextField} />;
        }
        if (attributeSpec.type === 'date') {
            return (
                <div>
                    <button className="date-picker-button" onClick={this.setCalendarTrue.bind(this, attributeSpec)}> 
                        {(this.props.placeholder.getAttributeValue(attributeSpec.name)) ? this.props.placeholder.getAttributeValue(attributeSpec.name) : "Pick Date"} 
                    </button>
                    {(this.state.showCalendar && (attributeSpec.name === this.state.calendarAttributeSpec)) 
                        ? 
                        <div className="date-picker-container" ref={(calendarDom) => this.calendarDom = calendarDom}>
                            <Calendar
                                showDateInput={false}
                                onSelect={this.handleCalendarSelect.bind(this, attributeSpec)}
                                style={{position: 'absolute', top: '0px', left: '0px'}}
                            /> 
                        </div>
                        : 
                        null
                    }
                </div>
            )
        }
        return <div>Unknown component type: {attributeSpec.type}</div>;
    };

    createCurrentFieldRowInSummary = (attribute) => {
        let currentFieldRowInSummary = "";
        const value = this.props.placeholder.getAttributeValue(attribute.name);
        if (this.state.expanded || !this.state.done) {
            currentFieldRowInSummary = (
                <Grid container key={attribute.name}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2} style={{display: 'flex', alignItems: 'center' }}><span>{attribute.title}</span></Grid>
                    <Grid item xs={9}><span>{this.createFillFieldForPlaceholder(attribute, value)}</span></Grid>
                </Grid>
            );
        }
        return currentFieldRowInSummary;
    };

    createAllRows = () => {
        return this.props.placeholder.metadata.formSpec.attributes.map(attr => {
            return this.createCurrentFieldRowInSummary(attr);
        });
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
                columns.push(<span onClick={this.onClickOnField.bind(this, index)} className="structured-data" key={`${index}-value`}>{Lang.isArray(value) ? value.join(', ') : value}</span>);
            }
        });
        let currentFieldRowInSummary = "";
        if (!this.state.expanded) {
            const attribute = this.props.placeholder.metadata.formSpec.attributes[this.state.currentField];
            currentFieldRowInSummary = this.createCurrentFieldRowInSummary(attribute);
        }
        let errorString = "";
        if (!Lang.isNull(this.state.error)) {
            errorString = <span className="error-message">{this.state.error}</span>
        }
        return (
            <ExpansionPanel expanded={this.state.expanded} className='expanded-style'>
                <ExpansionPanelSummary style={{ backgroundColor: this.props.backgroundColor, cursor: 'default' }} expandIcon={<ExpandMoreIcon onClick={this.onExpand}/>}>
                    <Grid container>
                        <Grid item xs={3}>
                            <span className="done-checkbox"><Checkbox style={{ width: 26, height: 26 }} checked={this.state.done} value="done" onChange={this.onDone} color="primary" /></span>
                            <span className="shortcut-name" key="0">{this.props.placeholder.shortcutName}</span>
                        </Grid>
                        <Grid item xs={9}> 
                            {columns}
                        </Grid>
                        {errorString}
                        {!this.state.expanded ? currentFieldRowInSummary : null}
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ backgroundColor: this.props.backgroundColor }}>
                    <Grid container>
                        {this.state.expanded ? this.createAllRows() : null}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

FillPlaceholder.propTypes = {
    placeholder: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};