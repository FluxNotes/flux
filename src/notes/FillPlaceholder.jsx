import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import FontAwesome from 'react-fontawesome';
import Calendar from 'rc-calendar';
import moment from 'moment';
import Lang from 'lodash';
import ButtonSetFillFieldForPlaceholder from './fillFieldComponents/ButtonSetFillFieldForPlaceholder';
import MultiButtonSetFillFieldForPlaceholder from './fillFieldComponents/MultiButtonSetFillFieldForPlaceholder';
import Button from '../elements/Button';
import 'rc-calendar/assets/index.css';

import './FillPlaceholder.css';
import SearchableListForPlaceholder from './fillFieldComponents/SearchableListForPlaceholder';

export default class FillPlaceholder extends Component {
    constructor(props) {
        super(props);
        const { placeholder } = props;

        this.onDone = this.onDone.bind(this);
        this.calendarDom = null;

        const firstUnfilledFields = placeholder.entryShortcuts.map((_, i) => {
            // Determine the first field with no data entered for it; this field will be displayed upon startup.
            const firstUnfilledField = placeholder.attributes.findIndex(attribute => !this.isValidAttribute(placeholder.getAttributeValue(attribute.name, i)));

            return firstUnfilledField;
        });

        // If all fields are filled out, mark as done for single entry placeholders
        // Wrap around to first field for multiple entry placeholders
        let done = false;
        let currentField;
        if (firstUnfilledFields.length === 1 && placeholder.multiplicity !== 'many') {
            if (firstUnfilledFields[0] === -1) {
                done = true;
                currentField = [0];
            } else {
                currentField = [firstUnfilledFields[0]];
            }
        } else {
            const finishedFields = firstUnfilledFields.map(firstUnfilledField => firstUnfilledField === -1);
            currentField = finishedFields.map((d, i) => (!d ? firstUnfilledFields[i] : 0));
        }

        // If placeholder had been previously filled out, mark as done.
        if (placeholder.done) done = true;

        this.state = {
            currentField,
            done,
            expanded: false,
            error: null,
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    fillFromData = (data, source) => {
        const { placeholder } = this.props;
        let errorToReturn = null, error; // return first error only

        let entryIndex = 0;
        if (placeholder.multiplicity === 'many') {
            // original implementation to determine if we should add a new entry or not for a multiple-entry placeholder
            // if first field of the last entry has a value, we add a new one else we use it
            let lastEntryIndex = placeholder.entryShortcuts.length - 1;
/*            const valFirstField = placeholder.getAttributeValue(data.fields[0].name, lastEntryIndex);
            if (Lang.isUndefined(valFirstField) || Lang.isNull(valFirstField) || valFirstField.length === 0) {
                entryIndex = lastEntryIndex;
            } else {
                this.addEntry();
                entryIndex = lastEntryIndex + 1;
            }*/

            if (Lang.isUndefined(placeholder.entryShortcuts[lastEntryIndex].getSource())) {
                // undefined source on last entry
                entryIndex = lastEntryIndex;
            } else {
                this.addEntry();
                entryIndex = lastEntryIndex + 1;
            }
            // new implementation. If the last entry has a source, we add a new one else we use it
        }

        data.fields.forEach((field) => {
            error = this.onSetValue(source, {name: field.name }, entryIndex, field.value, false);
            if (!Lang.isNull(error) && Lang.isNull(errorToReturn)) errorToReturn = error;
        });

        if (Lang.isNull(errorToReturn) && placeholder.multiplicity !== 'many') {
            this.setState({ done: true });
        }
        return errorToReturn;
    }

    handleClick = (event) => {
        if (this.calendarDom && !this.calendarDom.contains(event.target)) this.setState({ showCalendar: false });
    }

    onDone = (event) => {
        let { done } = this.state;
        const { placeholder } = this.props;

        done = event.target.checked;
        placeholder.done = event.target.checked;
        this.setState({ done, expanded: false });
    };

    onExpand = (event) => {
        const { expanded } = this.state;

        this.setState({ expanded: !expanded });
    };

    onClickOnField = (attributeIndex, entryIndex = 0) => {
        const { currentField } = this.state;

        currentField[entryIndex] = attributeIndex;
        this.setState({ currentField });
    };

    nextField = (entryIndex = 0) => {
        let { currentField, done } = this.state;
        const { placeholder } = this.props;

        if (currentField[entryIndex] + 1 === placeholder.attributes.length) {
            // User has entered final attribute, so mark row as done
            if (placeholder.multiplicity !== 'many') {
                done = true;
                this.props.placeholder.done = true;
                this.setState({ done });
            } else {
                currentField[entryIndex] = 0;
                this.setState({ currentField });
            }
        } else {
            currentField[entryIndex] += 1;
            this.setState({ currentField });
        }
    };

    onSetValue = (source, attributeSpec, entryIndex, newValue, moveToNextField = true) => {
        const { placeholder } = this.props;
        //if (entryIndex === -1) entryIndex = placeholder.entryShortcuts.length - 1;
        const attributes = placeholder.getAttributeValue(attributeSpec.name, entryIndex);
        let error;

        if (Lang.isArray(attributes) && Lang.includes(attributes, newValue)) {
            Lang.remove(attributes, attr => attr === newValue);
            error = placeholder.setAttributeValue(attributeSpec.name, attributes, entryIndex, source);
        } else {
            error = placeholder.setAttributeValue(attributeSpec.name, newValue, entryIndex, source);

            // We only want to increment the field if we are working on a non-expanded and non-multiselect attribute
            // This might only be a temporary workaround, we have to see how it goes as the other fields get implemented
            if (moveToNextField && Lang.isNull(error) && !(this.state.expanded || Lang.isArray(attributes))) {
                this.nextField(entryIndex);
            }
        }

        this.setState({ error });
        return error;
    };

    setCalendarTrue = (attributeSpec) => {
        this.setState({
            calendarAttributeSpec: attributeSpec.name,
            showCalendar: true,
        });
    }

    nextField = (entryIndex = 0) => {
        let { done } = this.state;
        const { currentField } = this.state;
        const { placeholder } = this.props;

        if (currentField[entryIndex] + 1 === placeholder.attributes.length) {
            // User has entered final attribute, so mark row as done
            if (placeholder.multiplicity !== 'many') {
                done = true;
                placeholder.done = true;
                this.setState({ done });
            } else {
                currentField[entryIndex] = 0;
                this.setState({ currentField });
            }
        } else {
            currentField[entryIndex] += 1;
            this.setState({ currentField });
        }
    }

    handleClick = (event) => {
        if (this.calendarDom && !this.calendarDom.contains(event.target)) this.setState({ showCalendar: false });
    }

    handleCalendarSelect = (attributeSpec, entryIndex = 0, date) => {
        const dateSelected = date.format('D MMM YYYY');
        this.onSetValue("click/touch", attributeSpec, entryIndex, dateSelected);
        this.setState({ showCalendar: false });
    }

    createFillFieldForPlaceholder = (attributeSpec, value, entryIndex = 0) => {
        const { calendarAttributeSpec, showCalendar } = this.state;
        const { backgroundColor, placeholder } = this.props;

        if (attributeSpec.type === 'radioButtons') {
            return <ButtonSetFillFieldForPlaceholder attributeSpec={attributeSpec} value={value} updateValue={this.onSetValue.bind(this, "click/touch", attributeSpec, entryIndex)} />;
        }
        if (attributeSpec.type === 'checkboxes') {
            return <MultiButtonSetFillFieldForPlaceholder attributeSpec={attributeSpec} value={value} updateValue={this.onSetValue.bind(this, "click/touch", attributeSpec, entryIndex)} />;
        }
        if (attributeSpec.type === 'searchableList') {
            return <SearchableListForPlaceholder attributeSpec={attributeSpec} backgroundColor={backgroundColor} value={value} updateValue={this.onSetValue.bind(this, "click/touch", attributeSpec, entryIndex)} />;
        }
        if (attributeSpec.type === 'date') {
            let date = new Date(placeholder.getAttributeValue(attributeSpec.name));
            date = moment(date).format('MM/DD/YYYY');

            return (
                <div>
                    <button className='date-picker-button' onClick={this.setCalendarTrue.bind(this, attributeSpec)}>
                        {(placeholder.getAttributeValue(attributeSpec.name)) ? date : 'MM/DD/YYYY'}
                        <div className="arrow-container"><i className="arrow-down"></i></div>
                    </button>
                    {(showCalendar && (attributeSpec.name === calendarAttributeSpec))
                        ?
                        <div className='date-picker-container' ref={(calendarDom) => this.calendarDom = calendarDom}>
                            <Calendar
                                showDateInput={false}
                                onSelect={this.handleCalendarSelect.bind(this, attributeSpec, entryIndex)}
                                style={{ position: 'absolute', top: '0px', left: '0px' }}
                            />
                        </div>
                        :
                        null
                    }
                </div>
            );
        }

        return (
            <div>
                Unknown component type: {attributeSpec.type}
            </div>
        );
    }

    createCurrentFieldRowInSummary = (attribute, entryIndex = 0) => {
        const { done, expanded } = this.state;
        const { placeholder } = this.props;
        let currentFieldRowInSummary = '';
        let multiSelect = "";
        let nextButton = "";

        if (attribute.type === 'checkboxes') {
            multiSelect =
                <span className="multi-select"> (select multiple) </span>
            if(!expanded) {
                nextButton =
                <Grid item xs={2}>
                    <Button
                        raised
                        classes={{
                            root:"poc-next-item-btn"
                        }}
                        onClick={expanded ? null : this.nextField.bind(this, entryIndex)}
                    >
                        <span>
                            Next
                        </span>
                    </Button>
                </Grid>
            }
        }

        const value = placeholder.getAttributeValue(attribute.name, entryIndex);
        if (expanded || !done) {
            currentFieldRowInSummary = (
                <Grid className="field-row" container key={attribute.name}>
                    <Grid item xs={1} />
                    <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="attribute-title">
                            {attribute.title} <br/>
                            {multiSelect}
                        </span>
                    </Grid>
                    <Grid item xs={7}>
                        <span>
                            {this.createFillFieldForPlaceholder(attribute, value, entryIndex)}
                        </span>
                    </Grid>                   
                    {nextButton}
                </Grid>
            );
        }

        return currentFieldRowInSummary;
    };

    addEntry = () => {
        const { placeholder } = this.props;
        const { currentField } = this.state;

        currentField.push(0);
        placeholder.addEntry();
        this.setState({ currentField });
    }

    deleteEntry = (entryIndex) => {
        const { placeholder } = this.props;
        const { currentField } = this.state;

        currentField.splice(entryIndex, 1);
        placeholder.deleteEntry(entryIndex);
        this.setState({ currentField });
    }

    createAllRows = (entryIndex = 0) => {
        const { placeholder } = this.props;

        return placeholder.attributes.map(attr => this.createCurrentFieldRowInSummary(attr, entryIndex));
    };

    isValidAttribute = value => !(Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0))

    renderAddButton = () => {
        const { done } = this.state;
        const { placeholder } = this.props;
        const shortcutNameWithoutPrefix = placeholder.shortcutName.slice(1);

        let addButton = '';
        if (!done) {
            addButton = (
                <Button
                    onClick={this.addEntry}
                    style={{ float: 'right' }}
                >
                    <FontAwesome
                        name="plus"
                        style={{
                            color: 'rgb(26, 143, 221)',
                            marginRight: '5px',
                        }}
                    />
                    <span>
                        {`Add ${shortcutNameWithoutPrefix}`}
                    </span>
                </Button>
            );
        }

        return addButton;
    }

    renderDeleteButton = (entryIndex) => {
        const { done } = this.state;
        const { placeholder } = this.props;
        const shortcutNameWithoutPrefix = placeholder.shortcutName.slice(1);

        let deleteButton = '';
        if (!done) {
            deleteButton = (
                <Button
                    onClick={this.deleteEntry.bind(this, entryIndex)}
                    style={{ float: 'right' }}
                >
                    <FontAwesome
                        name="times"
                        style={{
                            color: 'red',
                            marginRight: '5px',
                        }}
                    />
                    <span>
                        {`Delete ${shortcutNameWithoutPrefix}`}
                    </span>
                </Button>
            );
        }

        return deleteButton;
    }

    renderError = () => {
        const { error } = this.state;

        let errorString = '';
        if (!Lang.isNull(error)) {
            errorString = (
                <span className="error-message">
                    {error}
                </span>
            );
        }

        return errorString;
    }

    renderCheckbox = () => {
        const { done } = this.state;
        const { placeholder } = this.props;

        return (
            <Grid item xs={3} className='checkbox-container'>
                <span className="done-checkbox">
                    <Checkbox style={{ width: 26, height: 26 }} checked={done} value="done" onChange={this.onDone} color="primary" />
                </span>
                <span className="shortcut-name" key="0">
                    {placeholder.shortcutName}
                </span>
            </Grid>
        );
    }

    renderColumns = (entryIndex = 0) => {
        const { placeholder } = this.props;
        const columns = [];

        placeholder.attributes.forEach((attribute, attributeIndex) => {
            const value = placeholder.getAttributeValue(attribute.name, entryIndex);

            columns.push(<span className="shortcut-field-title" key={`${entryIndex}-${attributeIndex}-label`}>{`${attribute.title}: `}</span>);
            if (!this.isValidAttribute(value)) {
                columns.push(<span onClick={this.onClickOnField.bind(this, attributeIndex, entryIndex)} className="fill-missing-data" key={`${entryIndex}-${attributeIndex}-value`}>No Data</span>);
            } else {
                columns.push(<span onClick={this.onClickOnField.bind(this, attributeIndex, entryIndex)} className="fill-structured-data" key={`${entryIndex}-${attributeIndex}-value`}>{ Lang.isArray(value) ? value.join(', ') : value }</span>);
            }
        });

        return columns;
    }

    renderSingleEntryPlaceholder = () => {
        const { currentField, expanded, done } = this.state;
        const { backgroundColor, placeholder } = this.props;
        const attribute = placeholder.attributes[currentField[0]];
        const expandIcon = done ? "" : <ExpandMoreIcon onClick={this.onExpand} />; // remove expand icon if done

        return (
            <ExpansionPanel expanded={expanded} className="expanded-style">
                <ExpansionPanelSummary style={{ backgroundColor, cursor: 'default' }} expandIcon={expandIcon}>
                    <Grid container>
                        {this.renderCheckbox()}
                        <Grid item xs={9}>
                            {this.renderColumns()}
                        </Grid>
                        {this.renderError()}
                        {expanded ? '' : this.createCurrentFieldRowInSummary(attribute)}
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ backgroundColor }}>
                    <Grid container>
                        {expanded ? this.createAllRows() : null}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }

    renderMultipleEntriesPlaceholder = () => {
        const { currentField, expanded, done } = this.state;
        const { backgroundColor, placeholder } = this.props;

        // Loop through all entries and render summaries
        let entries;
        if (!expanded) {
            entries = placeholder.entryShortcuts.map((_, i) => {
                const attribute = placeholder.attributes[currentField[i]];

                return (
                    <Grid container key={`${i}-container`}>
                        {i === 0 ? this.renderCheckbox() : <Grid item xs={3} />}
                        <Grid item xs={9}>
                            {this.renderColumns(i)}
                            {placeholder.entryShortcuts.length === 1 ? null : this.renderDeleteButton(i)}
                        </Grid>
                        {''}
                        {expanded ? '' : this.createCurrentFieldRowInSummary(attribute, i)}
                        <Divider className="divider" />
                    </Grid>
                );
            });
        }

        // Only render checkbox in expansion summary when expanion panel is expanded
        const expansionSummary = expanded
            ? (
                <Grid container>
                    {this.renderCheckbox()}
                </Grid>
            )
            : (
                <div>
                    {this.renderError()}
                    {entries}
                    <div style={{ width: '100%' }}>
                        {this.renderAddButton()}
                    </div>
                </div>
            );

        // When expanded, render column and all rows for each entry
        let allRowsAndColumns;
        if (expanded) {
            allRowsAndColumns = placeholder.entryShortcuts.map((_, i) => (
                <Grid container key={`${i}-expanded-rows`}>
                    <Grid item xs={3} />
                    <Grid item xs={9}>
                        {this.renderColumns(i)}
                        {placeholder.entryShortcuts.length === 1 ? null : this.renderDeleteButton(i)}
                    </Grid>
                    {this.createAllRows(i)}
                    <Divider className="divider" />
                </Grid>
            ));
        }
        const expansionDetails = !expanded ? <Grid container /> : (
            <Grid container>
                {this.renderError()}
                {allRowsAndColumns}
                <div style={{ width: '100%' }}>
                    {this.renderAddButton()}
                </div>
            </Grid>
        );
        const expandIcon = done ? "" : <ExpandMoreIcon onClick={this.onExpand} />; // remove expand icon if done

        return (
            <ExpansionPanel expanded={expanded} className="expanded-style">
                <ExpansionPanelSummary style={{ backgroundColor, cursor: 'default' }} expandIcon={expandIcon}>
                    {expansionSummary}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ backgroundColor }}>
                    {expansionDetails}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }

    render() {
        const { placeholder } = this.props;

        return !placeholder.multiplicity ? this.renderSingleEntryPlaceholder() : this.renderMultipleEntriesPlaceholder();
    }
}

FillPlaceholder.propTypes = {
    placeholder: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};