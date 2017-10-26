import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './DataSummaryTable.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class DataSummaryTable extends Component {
    getList() {
        const { patient, condition, conditionSection } = this.props;
        if (patient == null || condition == null || conditionSection == null) { return []; }

        const items = conditionSection.items;
        const itemsFunction = conditionSection.itemsFunction;

        let list = null;
        if (Lang.isUndefined(items)) {
            list = itemsFunction(patient, condition);
        } else {
            list = items.map((item, i) => {
                if (Lang.isNull(item.value)) {
                    return { name: item.name, value: null };
                } else {
                    return { name: item.name, value: item.value(patient, condition), shortcut: item.shortcut };
                }
            });
        }

        return list;
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
            console.log(item.value);
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

    render() {
        const list = this.getList();
        if (list.length <= 0) { return <h2>None</h2>; }

		return (
            <table>
                <tbody>
                    {this.renderedListItems(list)}
                </tbody>
            </table>
        );
    }
}

DataSummaryTable.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    onItemClicked: PropTypes.func
};

export default DataSummaryTable;
