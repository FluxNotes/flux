import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './TabularNameValuePairsVisualizer.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class TabularNameValuePairsVisualizer extends Component {

    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = [];
        conditionSection.data.forEach((subsection) => {
            subsections.push(subsection);
        });

        return subsections;
    }

    getList(subsection) {
        const {patient, condition, conditionSection} = this.props;
        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        const items = subsection.items;
        const itemsFunction = subsection.itemsFunction;

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

    renderedSubsections(subsections) {
        const isSingleColumn = !this.props.isWide;

        if (isSingleColumn) {
            return subsections.map((subsection, index) => {
                return this.renderedSubsection(subsection, index);
            });
        }

        // Grab the sections from subsections and create 2 arrays, one for the first half of the sections and another
        // for the second half of sections
        const numberOfFirstHalfSections = Math.ceil(subsections.length / 2);
        let firstHalfSections = [];
        let secondHalfSections = [];

        // Create array containing the first half of the subsections
        subsections.slice(0, numberOfFirstHalfSections).forEach((subsection) => {
            firstHalfSections.push(subsection);
        });

        // Create array containing the second half of the subsections
        subsections.slice(numberOfFirstHalfSections).forEach((subsection) => {
            secondHalfSections.push(subsection);
        });

        let ind = 0;
        const renderedFirstHalf = firstHalfSections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++);
        });
        const renderedSecondHalf = secondHalfSections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++);
        });

        // Display the data in 2 columns. The first column displays the first half
        // of the sections in one table and the second column displays the second half of the sections in a second table
        return (
            <Row start="xs">
                <Col sm={6}>
                    {renderedFirstHalf}
                </Col>
                <Col sm={6}>
                    {renderedSecondHalf}
                </Col>
            </Row>
        );
    }

    renderedSubsection(subsection, index) {
        const list = this.getList(subsection);

        if (list.length <= 0) {
            return <h2 key={index}>None</h2>;
        }

        return (
            <table key={index}>
                <tbody>
                    <tr>
                        <td className="subsection-header">
                            {subsection.name}
                        </td>
                    </tr>
                    {this.renderedListItems(list)}
                </tbody>
            </table>
        );
    }

    renderedListItem(item, index, rowClass, itemClass, itemText, onClick, hoverClass) {
        if (this.props.allowItemClick && !Lang.isEqual(itemClass, "missing")) {
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
                console.log("setting captured, item.value is " + item.value);
                rowClass = "captured";
                itemClass = "captured";
                itemText = item.value;
                onClick = (e) => this.props.onItemClicked(item);
                hoverClass = "button-hover";
            } else {
                // rowClass "captured" makes buttons greyed-out
                // set rowClass to "missing" to make buttons completely invisible
                rowClass = "captured"; 
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
        const subsections = this.getSubsections();

        return (
            <div className="tabular-subsections">
                {this.renderedSubsections(subsections)}
            </div>
        );
    }
}

TabularNameValuePairsVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default TabularNameValuePairsVisualizer;
