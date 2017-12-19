import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './TabularListVisualizer.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class TabularListVisualizer extends Component {
//  this all will have to change to accomodate lists.
    // this has one subsection, the Procedures ListType from SummaryMetadata with the itemsFunction
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
           // console.log("in TabularListViz.getList() old method:: "); it's all there
           // console.log(patient);
           // console.log(condition);
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
       // console.log('...and List is correct, 5 procedures');
      //  console.log(list);
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
       /* const numberOfFirstHalfSections = Math.ceil(subsections.length / 2);
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
        });*/
        
        // just use subsections
        let ind = 0;
        const renderedAllSections = subsections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++);
        });

        // Display the data in 2 columns. The first column displays the first half
        // of the sections in one table and the second column displays the second half of the sections in a second table
        // may need better Cols inserted for each column.
        return (
            <Row start="xs">
                <Col sm={6}>
                    {renderedAllSections}
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
 // not the same hieght within a row, why?
    renderedListItem(item, index, rowClass, itemClass, itemText, onClick, hoverClass) {
        if (this.props.allowItemClick) {
            // Allows for 5% for each + button, and the remainder divided among the columns. There are item.length columns.
            let columnPercentage = (100 - 5*item.length) / item.length;
            let renderedColumns = item.map((element, arrayIndex) => {
                if(Lang.isEqual(arrayIndex, 0)){
                    // white background on the first column
                    return (   
                        <span className="data">   
                            <td width={columnPercentage + "%"}>{element}</td>
                            <td width="5%" onClick={onClick}>
                                <span className={hoverClass}><i className="fa fa-plus-square fa-lg"></i></span>
                            </td>
                        </span>
                   );
                } else {
                    // red or blue background on the other columns
                    return (
                        <span className="data">
                            <td width={columnPercentage + "%"} className={itemClass} data-test-summary-item={item[0]}>{element}</td>
                            <td width="5%" onClick={onClick}>
                                <span className={hoverClass}><i className="fa fa-plus-square fa-lg"></i></span>
                            </td>
                        </span>
                    );
                }
            });
            return (
                <tr key={index} className={rowClass}>
                    {renderedColumns}  
                </tr>
            );
        }

        // TODO also edit this return the same way, is the else of line 1
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
        // item is now an Array. so this should not be called by firstHalf and secondHalf, one call per row.
        return list.map((item, index) => {
            console.log("in map in renderedListItems:: ");
            console.log(item[0]);
            console.log(item[1]);
            console.log(index);
            // Handles case where this method is passed a NameValuePair or other type accidentally, or null
            if(!Lang.isArray(item) || Lang.isEmpty(item)){
                itemClass = "missing";
                item = [ "Missing data" ];
                onClick = null;
                hoverClass = null;
            } else {
                rowClass = "captured";
                itemClass = "captured";
               // itemText = item.value; //value part of key-value
                onClick = (e) => this.props.onItemClicked(item);
                hoverClass = "button-hover";
            }
            return this.renderedListItem(item, index, rowClass, itemClass, onClick, hoverClass);
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

TabularListVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default TabularListVisualizer;
