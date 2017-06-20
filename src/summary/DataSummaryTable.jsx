import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

                if (item.display) {
                  rowClass = "captured";
                  itemClass = "captured";
                  itemText = item.display;

                } else {
                  itemClass = "missing";
                  itemText = `Missing ${item.name}`;
                }

                return (
                  <tr key={i} className={rowClass}>
                      <td>{item.name}</td><td className={itemClass}>{itemText}</td><td onClick={(e) => this.props.onItemClicked(item)}><i className="fa fa-plus-square fa-lg"></i></td>
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
