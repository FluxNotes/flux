// React imports
import React, {Component} from 'react';
//import PropTypes from 'prop-types';
// Lodash component
import Lang from 'lodash'
// Styling
import './DataSummaryTable.css';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class DataSummaryTable extends Component {

    render() {
		let list = null;
		//console.log(this.props.items);
		if (Lang.isUndefined(this.props.items)) {
			list = this.props.itemsFunction(this.props.patient, this.props.currentConditionEntry);
		} else {
			list = this.props.items.map((item, i) => {
				if (Lang.isNull(item.value)) {
					return {name: item.name, value: null };
				} else {
					return {name: item.name, value: item.value(this.props.patient, this.props.currentConditionEntry) };
				}
			});
		}
		//console.log(list);
		if (list.length > 0) {
        return (
            <table>
                <tbody>
				{list.map((item, i) => {
						let rowClass = "";
						let itemClass = "";
						let itemText = "";
						let value = item.value;

						if (!Lang.isEmpty(value)) {
							rowClass = "captured";
							itemClass = "captured";
							itemText = value;
						} else { 
							itemClass = "missing";
							itemText = `Missing ${item.name}`;
						}

						if (this.props.allowItemClick) {
							return (
								<tr key={i} className={rowClass}>
									<td width="40%">{item.name}</td>
									<td width="55%" className={itemClass}>{itemText}</td>
									<td width="5%" onClick={(e) => this.props.onItemClicked(itemText)}><span className="button-hover"><i className="fa fa-plus-square fa-lg"></i></span></td>
								</tr>
							);
						} else {
							return (
								<tr key={i} className={rowClass}>
									<td width="40%">{item.name}</td>
									<td width="55%" className={itemClass}>{itemText}</td>
									<td className="disabled" width="5%"><span><i className="fa fa-plus-square fa-lg"></i></span></td>
								</tr>
							);
						}
				})}
                </tbody>
            </table>
        );
		} else {
			return <h2>None</h2>;
		}
    }
}
/*
DataSummaryTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        display: PropTypes.display
    })),
    onItemClicked: PropTypes.func
};*/

export default DataSummaryTable;
