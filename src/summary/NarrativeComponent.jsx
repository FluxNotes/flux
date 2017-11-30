import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import Lang from 'lodash';
import './NarrativeComponent.css';

/*
 A narrative view of one or more data summary items.
 */
class NarrativeComponent extends Component {

    getNarrativeTemplate() {
        return this.props.conditionSection.narrative;
    }

    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = [];
        conditionSection.data.forEach((subsection) => {
            subsections[subsection.name] = subsection;
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
    
    populateTemplate(template, subsections) {
        let result = "";        
        const len = template.length;
        let index, start = 0;
        let pos = template.indexOf("${"), endpos;
        let list, item, value, valueSpec, subsectionName, valueName;
        while (pos !== -1) {
            result += template.substring(start, pos);
            endpos = template.indexOf("}", pos);
            valueSpec = template.substring(pos + 2, endpos);
            index = valueSpec.indexOf(".");
            subsectionName = valueSpec.substring(0, index);
            valueName = valueSpec.substring(index + 1);
            //console.log(subsectionName);
            list = this.getList(subsections[subsectionName])
            //console.log(list);
            //console.log(valueName);
            item = list.find((item) => { return item.name === valueName});
            //console.log(item);
            if (item.value) {
                value = item.value;
            } else {
                value = "missing";
            }
            result += value;
            start = endpos + 1;
            if (endpos < len) {
                pos = template.indexOf("${", endpos+1);
            } else {
                pos = -1;
            }
        }
        if (start < len) result += template.substring(start);
        return result;
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        let template = this.getNarrativeTemplate();
        let subsections = this.getSubsections();

        const narrative = this.populateTemplate(template, subsections);
        
        return (
            <div>
                <p>{narrative}</p>
            </div>
        );
    }
}

NarrativeComponent.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default NarrativeComponent;
