import React, { Component } from 'react';
import ValueSetManager from '../../lib/ValueSetManager';
import SingleChoiceButton from '../../forms/SingleChoiceButton';

class ButtonSetFillFieldForPlaceholder extends Component {
    constructor(props) {
        super(props);
        const { category, valueSet, args } = this.props.attributeSpec.values;
        if (args && args.length > 0) {
            this._options = ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            this._options = ValueSetManager.getValueList(category, valueSet);
        }
    }

    handleOptionSelection = (e, i) => {
        e.preventDefault();
        const newValue = this._options[i].name;
        this.props.updateValue(newValue);
    }

    renderButtonGroup = (option, i) => {
        const marginSize = "2px";
        const optionName = option.name;
        //const optionDescription = option.description;
        //const tooltipClass = (optionDescription.length > 100) ? "tooltiptext large" : "tooltiptext";

        return (
            <div key={optionName} className="tooltip-progression-form">
                {/* <span id={optionName} className={tooltipClass}>{optionDescription}</span> */}
                <SingleChoiceButton
                    buttonKey={i}
                    buttonText={optionName}
                    onClick={(e) => this.handleOptionSelection(e, i)}
                    isSelected={this.props.value === this._options[i].name}
                    marginSize={marginSize}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="btn-group-status-progression">
                    {
                        this._options.map((option, i) => {
                            return this.renderButtonGroup(option, i)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ButtonSetFillFieldForPlaceholder;