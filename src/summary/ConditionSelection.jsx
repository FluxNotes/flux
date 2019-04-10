import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';

import './ConditionSelection.css';

class ConditionSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conditionIndex: null,
        };
    }

    componentWillMount() {
        if (this.props.conditions.length > 0) {
            this.selectCondition(0);
        }
    }

    selectCondition(conditionIndex) {
        const condition = this.props.conditions[conditionIndex];
        this.props.setCondition(condition);
        this.setState({ conditionIndex });
    }

    renderConditionList() {
        return this.props.conditions.map((condition, index) =>
            <MenuItem
                className="condition-item"
                key={`condition-${index}`}
                value={index}
                data-test-condition-selector-item={condition.type}>
                {condition.type}
            </MenuItem>
        );
    }

    render() {
        return (
            <div id="condition-selection">
                <h3 className="label">Condition</h3>
                <Select
                    className="condition-select"
                    variant
                    classes={{
                        "selectMenu": "condition-select-menu",
                    }}
                    value={this.state.conditionIndex}
                    onChange={(event) => this.selectCondition(event.target.value)}
                >
                    {this.renderConditionList()}
                </Select>
            </div>
        );
    }
}

ConditionSelection.propTypes = {
    conditions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        codes: PropTypes.arrayOf(PropTypes.shape({
            system: PropTypes.string,
            code: PropTypes.string,
            display: PropTypes.string
        }))
    })),
    setCondition: PropTypes.func.isRequired,
};

export default ConditionSelection;
