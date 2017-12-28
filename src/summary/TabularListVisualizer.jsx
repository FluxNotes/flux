import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './TabularListVisualizer.css';


/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class TabularListVisualizer extends Component {
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
        return subsections.map((subsection, index) => {
            return this.renderedSubsection(subsection, index);
        });
    }

    renderedSubsection(subsection, index) {
        const list = this.getList(subsection);

        if (list.length <= 0) {
            return <h2 key={index}>None</h2>;
        }
        let headings = null;
        if (subsection.headings) {
            let renderedColumnHeadings = [];
            subsection.headings.forEach((heading, index) => {
                if (this.props.isWide) {
                    renderedColumnHeadings.push(<th className="list-column-heading">{heading}</th>);
                } else {
                    renderedColumnHeadings.push(<th className="list-column-heading">{heading}</th>);
                    renderedColumnHeadings.push(<th/>);
                }
            });
            headings = <tr>{renderedColumnHeadings}</tr>;
        }
        
        let subsectionname = null;
        if (subsection.name && subsection.name.length > 0) {
            subsectionname = <tr><td className="list-subsection-header">{subsection.name}</td></tr>;
        }

        return (
            <table key={index}>
                <tbody>
                {headings}
                    {subsectionname}
                    {this.renderedListItems(list)}
                </tbody>
            </table>
        );
    }

    renderedListItem(item, index, rowClass, itemClass, onClick, hoverClass) {
            // Allows for 5% for each plus button, and the remainder divided among the columns. There are item.length columns.
            let columnPercentage = (100 - 5*item.length) / item.length;
            var renderedColumns = [];
            item.forEach((element, arrayIndex) => {
                var plusButtonForColumnItem = null;
                var columnItem = null;
                if(Lang.isNull(element)){
                    columnItem = (
                        <td width={columnPercentage + "%"} className={"list-missing"} data-test-summary-item={item[0]} key={index + "-item-" + arrayIndex}>Missing Data</td>
                );
                } else {
                    columnItem = (
                        <td width={columnPercentage + "%"} className={itemClass} data-test-summary-item={item[0]} key={index + "-item-" + arrayIndex}>{element}</td>
                    );
                }
                if (this.props.isWide) {
                    plusButtonForColumnItem = null;
                } else if (this.props.allowItemClick && !Lang.isNull(element)) {
                    plusButtonForColumnItem = (
                            <td width="5%" onClick={() => { this.props.onItemClicked(item, arrayIndex)}} key={index + "-plus-" + arrayIndex} className="list-enabled">
                                <span className={hoverClass}><i className="fa fa-plus-square fa-lg"></i></span>
                            </td>
                    );
                } else {
                        plusButtonForColumnItem = (
                        <td className="list-disabled" width="5%" key={index + "-plus-" + arrayIndex}><span><i className="fa fa-plus-square fa-lg"></i></span></td>
                    );
                }
                renderedColumns.push(columnItem);
                renderedColumns.push(plusButtonForColumnItem);
            });
            
            return (
                <tr key={index} className={rowClass}>
                    {renderedColumns}  
                </tr>
            );
    }
    
    renderedListItems(list) {
        let onClick, hoverClass, rowClass, itemClass = "";
        return list.map((item, index) => {
            // Handles case where this method is passed a NameValuePair or other type accidentally, or null
            if(!Lang.isArray(item) || Lang.isEmpty(item)){
                itemClass = "list-missing";
                item = [ "Missing data" ];
                onClick = null;
                hoverClass = null;
            } else {
                rowClass = "list-captured";
                itemClass = "list-captured";
                hoverClass = "list-button-hover";
            }
            return this.renderedListItem(item, index, rowClass, itemClass, onClick, hoverClass);
        });
    }

    render() {
        const subsections = this.getSubsections();

        return (
            <div className="tabular-list">
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
