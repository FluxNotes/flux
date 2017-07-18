// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Lodash component
import Lang from 'lodash'
// Moment JS
import moment from 'moment';
// Styling
import './DataSummaryTable.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class DataSummaryTable extends Component {

    render() {
        console.log(`\nLogging DataSummaryTable information for:`)
        console.log(this.props.items);
        return (
            <table>
                <tbody>
                {this.props.items.map((item, i) => {
                    console.log(`logging info for item in particular:`);
                    console.log(item);
                    let rowClass = "";
                    let itemClass = "";
                    let itemText = "";

                    if (!Lang.isEmpty(item.display)) {
                        rowClass = "captured";
                        itemClass = "captured";
                        itemText = item.display;
                        console.log(`just set itemText: ${itemText}`)
                    } else { 
                        itemClass = "missing";
                        itemText = `Missing ${item.name}`;
                        console.log(`Didn't set anything in itemText b.c. item display is invalid: ${itemText} and ${item.display}`)
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
