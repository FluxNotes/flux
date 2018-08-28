import React, { Component } from 'react';
import Lang from 'lodash';
import ValueSetManager from '../../lib/ValueSetManager';
import MultiChoiceButton from '../../forms/MultiChoiceButton';

class MultiButtonSetFillFieldForPlaceholder extends Component {
    constructor(props) {
        super(props);
        this._options = ValueSetManager.getValueList(this.props.attributeSpec.values.category, this.props.attributeSpec.values.valueSet);
    }

    handleOptionSelection = (e, i) => {
        e.preventDefault();
        const newValue = this._options[i].name;
        this.props.updateValue(newValue);
    };

    renderButtonGroup = (option, i) => {
        const marginSize = "2px";
        const optionName = option.name;

        return (
            <div key={optionName} className="tooltip-progression-form">
                {/* <span id={optionName} className={tooltipClass}>{optionDescription}</span> */}
                <MultiChoiceButton
                    buttonKey={i}
                    buttonText={optionName}
                    onClick={(e) => this.handleOptionSelection(e, i)}
                    isSelected={Lang.includes(this.props.value, this._options[i].name)}
                    marginSize={marginSize}
                />
            </div>
        );
    };

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

export default MultiButtonSetFillFieldForPlaceholder;