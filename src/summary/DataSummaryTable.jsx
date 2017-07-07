import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './DataSummaryTable.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class DataSummaryTable extends Component {

    render() {
        return (
            <table>
                <tbody>
                {this.props.items.map((item, i) => {
                    let rowClass = "";
                    let itemClass = "";
                    let itemText = "";

                    if (item.display && !item.startDate) {
                        rowClass = "captured";
                        itemClass = "captured";
                        itemText = item.display;
                    }

                    // Currently only progression items have a value field
                    if (item.value) {
                        rowClass = "captured";
                        itemClass = "captured";
                        itemText = item.value;
                    }

                    if (item.name === "Reasons") {
                        itemText = item.value.join(", ");
                    }

                    if (item.endDate) {
                        itemText = `${item.startDate.format('MM/DD/YYYY')} ― ${item.endDate.format('MM/DD/YYYY')}`;
                    }

                    if (item.startDate && !itemText) {
                        itemText = `${item.startDate.format('MM/DD/YYYY')}`;

                        if (item.display) {
                            itemText += ` : ${item.display}`;
                        }
                    }

                    if (itemText) {

                        if (item.name === "Progression Value" || item.name === "Reasons") {
                            const sixMonthsAgoDate = moment().subtract(6, 'months');

                            // Check if start date is longer than 6 months from today's date
                            if (item.startDate < sixMonthsAgoDate) {
                                itemClass = "missing";
                                itemText = `Missing recent progression`;
                                rowClass = "missing";
                            } else {
                                if (item.name === "Progression Value" && item.value === "") { 
                                    itemClass = "missing";
                                    itemText = `Missing recent progression`;
                                    rowClass = "missing";
                                } else if (item.name === "Reasons" && item.value.length === 0)  { 
                                    itemClass = "missing";
                                    itemText = `Missing recent progression`;
                                    rowClass = "missing";
                                } else {
                                    rowClass = "captured";
                                    itemClass = "captured"; 
                                }
                            }
                        } else {
                            rowClass = "captured";
                            itemClass = "captured";
                        }
                    } else {
                        itemClass = "missing";
                        itemText = `Missing ${item.name}`;
                    }

                    return (
                        <tr key={i} className={rowClass}>
                            <td width="40%">{item.name}</td>
                            <td width="55%" className={itemClass}>{itemText}</td>
                            <td width="5%" onClick={(e) => this.props.onItemClicked(itemText)}><span className="button-hover"><i className="fa fa-plus-square fa-lg"></i></span></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

DataSummaryTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        display: PropTypes.display
    })),
    onItemClicked: PropTypes.func
};

export default DataSummaryTable;
