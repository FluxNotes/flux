import React, { Component } from 'react';
import Lang from 'lodash';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
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
        //const optionDescription = option.description;
        //const tooltipClass = (optionDescription.length > 100) ? "tooltiptext large" : "tooltiptext";

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
        let nextButton = "";
        if (this.props.nextField) {
            nextButton = <ChevronRightIcon onClick={this.props.nextField} />;
        }
        return (
            <div>
            {/* <h4 className="header-spacing">Status<span className="helper-text"> Choose one</span></h4> */}
            <div className="btn-group-status-progression">
                {
                    this._options.map((option, i) => {
                        return this.renderButtonGroup(option, i)
                    })
                }
                {nextButton}
            </div>
            </div>
        );
    }
}

export default MultiButtonSetFillFieldForPlaceholder;