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

                let itemClass = "";
                if (item.display) {
                  itemClass = "captured";
                } else {
                  itemClass = "missing";
                }

                let itemText = "";
                if (item.display) {
                  itemText = item.display;
                } else {
                  itemText = `Missing ${item.name}`;
                }

                return (
                  <tr key={i}>
                      <td>{item.name}</td><td onClick={(e) => this.props.onItemClicked(item)} className={itemClass}>{itemText}</td>
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
