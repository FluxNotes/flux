import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './DataSummaryTable.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class DataSummaryTable extends Component {

    getSubSections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subSections = [];
        conditionSection.data.forEach((subSection) => {
            subSections.push(subSection);
        });

        return subSections;
    }

    getList(subSection) {
        const {patient, condition, conditionSection} = this.props;
        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        const items = subSection.items;
        const itemsFunction = subSection.itemsFunction;

        let list = null;

        if (Lang.isUndefined(items)) {
            list = itemsFunction(patient, condition);
        } else {
            list = items.map((item, i) => {
                if (Lang.isNull(item.value)) {
                    return {name: item.name, value: null};
                } else {
                    return {name: item.name, value: item.value(patient, condition), shortcut: item.shortcut};
                }
            });
        }

        return list;
    }

    renderedSubSections(subSections) {
        const isSingleColumn = !this.props.isWide;

        if (isSingleColumn) {
            return subSections.map((subSection, index) => {
                return this.renderedSubSection(subSection, index);
            });
        }

        // Grab the sections from subSections and create 2 arrays, one for the first half of the sections and another
        // for the second half of sections
        const numberOfFirstHalfSections = Math.ceil(subSections.length / 2);
        let firstHalfSections = [];
        let secondHalfSections = [];

        // Create array containing the first half of the subsections
        for (let i = 0; i < numberOfFirstHalfSections; i++) {
            firstHalfSections.push(subSections[i]);
        }

        // Create array containing the second half of the subsections
        for (let j = numberOfFirstHalfSections; j < subSections.length; j++) {
            secondHalfSections.push(subSections[j]);
        }

        let ind = 0;
        const renderedFirstHalf = firstHalfSections.map((subSection) => {
            return this.renderedSubSection(subSection, ind++);
        });
        const renderedSecondHalf = secondHalfSections.map((subSection) => {
            return this.renderedSubSection(subSection, ind++);
        });

        // Display the data in 2 columns. The first column displays the first half
        // of the sections in one table and the second column displays the second half of the sections in a second table
        return (
            <Row center="xs">
                <Col sm={6}>
                    {renderedFirstHalf}
                </Col>
                <Col sm={6}>
                    {renderedSecondHalf}
                </Col>
            </Row>
        );
    }

    renderedSubSection(subSection, index) {
        const list = this.getList(subSection);

        if (list.length <= 0) {
            return <h2 key={index}>None</h2>;
        }

        return (
            <table key={index}>
                <tbody>
                <tr>
                    <td className="collection-header">
                        {subSection.name}
                    </td>
                </tr>
                {this.renderedListItems(list)}
                </tbody>
            </table>
        );
    }

    renderedListItem(item, index, rowClass, itemClass, itemText, onClick, hoverClass) {
        if (this.props.allowItemClick) {
            return (
                <tr key={index} className={rowClass}>
                    <td width="40%">{item.name}</td>
                    <td width="55%" className={itemClass} data-test-summary-item={item.name}>{itemText}</td>
                    <td width="5%" onClick={onClick}>
                        <span className={hoverClass}><i className="fa fa-plus-square fa-lg"></i></span>
                    </td>
                </tr>
            );
        }

        return (
            <tr key={index} className={rowClass}>
                <td width="40%">{item.name}</td>
                <td width="55%" className={itemClass}>{itemText}</td>
                <td className="disabled" width="5%"><span><i className="fa fa-plus-square fa-lg"></i></span></td>
            </tr>
        );
    }
    
    renderedListItems(list) {
        let onClick, hoverClass, rowClass, itemClass, itemText = "";

        return list.map((item, index) => {
            if (!Lang.isEmpty(item.value)) {
                rowClass = "captured";
                itemClass = "captured";
                itemText = item.value;
                onClick = (e) => this.props.onItemClicked(item);
                hoverClass = "button-hover";
            } else {
                itemClass = "missing";
                itemText = `Missing ${item.name}`;
                onClick = null;
                hoverClass = null;
            }

            return this.renderedListItem(item, index, rowClass, itemClass, itemText, onClick, hoverClass);
        });
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        const subSections = this.getSubSections();

        return (
            <div>
                {this.renderedSubSections(subSections)}
            </div>
        );
    }
}

DataSummaryTable.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default DataSummaryTable;
