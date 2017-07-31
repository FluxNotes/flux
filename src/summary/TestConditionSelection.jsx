import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';

import './ConditionSelection.css';

class TestConditionSelection extends Component {

  constructor(props) {
    super(props);

    this.previousCondition = this.previousCondition.bind(this);
    this.nextCondition = this.nextCondition.bind(this);
  }
  
  getActiveCondition() {
	return this.props.conditions[this.props.activeConditionIndex];
  }

  render() {

    const activeCondition = this.props.conditions[this.props.activeConditionIndex];
	//console.log("activeCondition = " + activeCondition);

    let leftArrowClass = "arrow";
    if (this.props.activeConditionIndex === 0) {
      leftArrowClass += " disabled";
    }

    let rightArrowClass = "arrow";
    if (this.props.activeConditionIndex === this.props.conditions.length - 1) {
      rightArrowClass += " disabled";
    }

    return (
      <div>
        <Divider className="divider" />
          <div className="selected-condition">
              <span className="title">{activeCondition.specificType.coding.displayText}</span>
              <span id="left-arrow" className={leftArrowClass}>
                  <a onClick={(e) => this.previousCondition(e)}><i className="fa fa-arrow-left"></i></a>
              </span>
              <span id="right-arrow" className={rightArrowClass}>
                  <a onClick={(e) => this.nextCondition(e)}><i className="fa fa-arrow-right"></i></a>
              </span>
          </div>
        <Divider className="divider" />
      </div>
    );
  }

  previousCondition(e) {
    if (this.props.activeConditionIndex > 0) {
      //this.setState({activeCondition: this.props.activeConditionIndex - 1});
	  this.props.changeConditionIndex(this.props.activeConditionIndex - 1);
    }
  }

  nextCondition(e) {
    if (this.props.activeConditionIndex < this.props.conditions.length - 1) {
      //this.setState({activeCondition: this.props.activeConditionIndex + 1});
	  this.props.changeConditionIndex(this.props.activeConditionIndex + 1);
    }
  }
}

/*
ConditionSelection.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    codes: PropTypes.arrayOf(PropTypes.shape({
      system: PropTypes.string,
      code: PropTypes.string,
      display: PropTypes.string
    }))
  }))
};*/

export default TestConditionSelection;
